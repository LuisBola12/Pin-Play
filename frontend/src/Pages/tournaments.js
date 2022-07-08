import { Navbar } from "../Components/Navbar/Navbar";
import TournamentGrid from "../Components/TournamentGrid";
import AddTournamentButton from "../Components/TournamentGrid/AddTournamentButton";
import "../Components/TournamentGrid/styles.scss";
import AddTournamentModal from "../Components/TournamentGrid/AddTournamentModal";
import { useState, useEffect } from "react";
import { DropDown } from "../Components/DropDown/DropDown";
import { Footer } from "../Components/Footer/Footer";
import { getCategories, getTournaments, getPageCount } from "../Utils/getTourneysData/getTourneysData";
import { Loader } from "../Components/Loader/Loader";
import { Pagination } from "../Components/Pagination/Pagination";

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

  useEffect(() => {
    const getCategoriesInfo = async () =>{
      const categories = await getCategories();
      if(categories){
        setCategoriesReceived(true);
        setCategories([{Category: "Todas"}, ...categories]);
      }
    }
    const getTourneyPageCount = async () =>{
      const amountPages = await getPageCount(category, 12);
      if(amountPages){
        setPageCountReceived(true);
        setAmountPages(amountPages);
      }
    }
    getCategoriesInfo();
    getTourneyPageCount();
  }, []);

  useEffect(() => {
    const getTournamentsInfo = async () =>{
      const tourneys = await getTournaments(category, actualPage, 12);
      if(tourneys){
        setTournamentsReceived(true);
        setTournaments(tourneys);
      }
    }
    getTournamentsInfo();
  }, [category, actualPage]);



  const filterTournaments = (categoria) => {}

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
            <AddTournamentButton onClick={() => setIsOpen(true)}/>
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
