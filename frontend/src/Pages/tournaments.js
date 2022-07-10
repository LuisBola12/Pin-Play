import { Navbar } from "../Components/Navbar/Navbar";
import TournamentGrid from "../Components/TournamentGrid";
import AddTournamentButton from "../Components/TournamentGrid/AddTournamentButton";
import "../Components/TournamentGrid/styles.scss";
import AddTournamentModal from "../Components/TournamentGrid/AddTournamentModal";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { DropDown } from "../Components/DropDown/DropDown";
import { Footer } from "../Components/Footer/Footer";
import { getCategories, getTournaments, getPageCount } from "../Utils/getTourneysData/getTourneysData";
import { Loader } from "../Components/Loader/Loader";
import { Pagination } from "../Components/Pagination/Pagination";
import Mixpanel from "../services/mixpanel";

const Tournaments = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [tournaments, setTournaments] = useState([]);
  const [category, setCategory] = useState("Todas");
  const [actualPage, setActualPage] = useState(1);
  const [amountPages, setAmountPages] = useState([]);
  const [tournamentsReceived, setTournamentsReceived] = useState(false);
  const [categoriesReceived, setCategoriesReceived] = useState(false);
  const [pageCountReceived, setPageCountReceived] = useState(false);
  const userIsLoggedIn = useSelector((state) => state.user.userIsLoggedIn);

  useEffect(() => {
    const getCategoriesInfo = async () =>{
      const categories = await getCategories();
      if(categories){
        setCategoriesReceived(true);
        setCategories([{Category: "Todas"}, ...categories]);
      }
    }
    getCategoriesInfo();
  }, []);

  useEffect(() => {
    const getTournamentsInfo = async () =>{
      setTournaments([]);
      const tourneys = await getTournaments(category, actualPage, 12);
      if(tourneys){
        setTournamentsReceived(true);
        setTournaments(tourneys);
      }
    }
    const getTourneyPageCount = async () =>{
      const amountPages = await getPageCount(category, 12);
      if(amountPages){
        setPageCountReceived(true);
        setAmountPages(amountPages);
      }
    }
    getTournamentsInfo();
    getTourneyPageCount();
    Mixpanel.track(Mixpanel.TYPES.VIEW_TOURNAMENTS,{category,actualPage});
  }, [category, actualPage]);

  return !tournamentsReceived || !categoriesReceived || !pageCountReceived ? <Loader/> : (
    <>
      <AddTournamentModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="background-page">
        <div className="sticky-navbar">
          <Navbar />
        </div>
        <div className="page-content">
          <div className="tournaments__header">
            <DropDown options={categories} setCategory={setCategory} setActualPage={setActualPage} />
            {userIsLoggedIn && <AddTournamentButton onClick={() => setIsOpen(true)}/>}
          </div>
          <TournamentGrid tournaments={tournaments} />
          <div className="topPlayers-pages">
            <Pagination handlePage={setActualPage} amountPages={amountPages} actualPage={actualPage} />
          </div>
        </div>
        <Footer color={'black'} position={'relative'}></Footer>
      </div>
    </>
  );
};

export default Tournaments;