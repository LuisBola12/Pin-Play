import { Navbar } from "../Components/Navbar/Navbar";
import TournamentGrid from "../Components/TournamentGrid";
import AddTournamentButton from "../Components/TournamentGrid/AddTournamentButton";
import "../Components/TournamentGrid/styles.scss";
import AddTournamentModal from "../Components/TournamentGrid/AddTournamentModal";
import { useState } from "react";
import { Footer } from "../Components/Footer/Footer";

const Tournaments = () => {
  const [isOpen, setIsOpen] = useState(false);
  // TODO: Get tournaments from API
  const dummyTournaments = [
    {
      id: 1,
      name: "Ranking Nacional III 2022",
      image: "/placeholder-tournament.jpeg",
      playerCount: "10",
      date: "20/10/2020",
      location: "Parque de la Paz",
      category: "Primera Categoría",
    },
    {
      id: 2,
      name: "Torneo Michi salvaje",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      playerCount: "24",
      date: "20/10/2020",
      location: "Parque de los Gatos",
      category: "Segunda Categoría",
    },
    {
      id: 3,
      name: "Torneo 3",
      image: "/placeholder-tournament.jpeg",
      playerCount: "40",
      date: "20/10/2020",
      location: "Estadio Nacional, La Sabana",
      category: "Cuarta Categoría",
    },
    {
      id: 4,
      name: "Torneo 4",
      image: "/placeholder-tournament.jpeg",
      playerCount: "50",
      date: "20/10/2020",
      location: "Parque de la Paz",
      category: "Quinta Categoría",
    },
    {
      id: 5,
      name: "Ranking Nacional Femenino III 2022",
      image: "/placeholder-tournament.jpeg",
      playerCount: "10",
      date: "20/10/2020",
      location: "Parque de la Paz",
      category: "Primera Categoría",
    },
    {
      id: 6,
      name: "Torneo 5",
      image: "/placeholder-tournament.jpeg",
      playerCount: "50",
      date: "20/10/2020",
      location: "Parque de la Paz",
      category: "Sexta Categoría",
    },
    {
      id: 7,
      name: "Torneo 6",
      image: "/placeholder-tournament.jpeg",
      playerCount: "40",
      date: "20/10/2020",
      location: "Estadio Nacional, La Sabana",
      category: "Cuarta Categoría",
    },
    {
      id: 8,
      name: "Torneo 7",
      image: "/placeholder-tournament.jpeg",
      playerCount: "50",
      date: "20/10/2020",
      location: "Parque de la Paz",
      category: "Quinta Categoría",
    },
    {
      id: 9,
      name: "Ranking Nacional Menor III 2022",
      image: "/placeholder-tournament.jpeg",
      playerCount: "10",
      date: "20/10/2020",
      location: "Parque de la Paz",
      category: "Primera Categoría",
    },
    {
      id: 10,
      name: "Torneo 8",
      image: "/placeholder-tournament.jpeg",
      playerCount: "50",
      date: "20/10/2020",
      location: "Parque de la Paz",
      category: "Sexta Categoría",
    },
    {
      id: 11,
      name: "Torneo 9",
      image: "/placeholder-tournament.jpeg",
      playerCount: "40",
      date: "20/10/2020",
      location: "Estadio Nacional, La Sabana",
      category: "Cuarta Categoría",
    },
    {
      id: 12,
      name: "Torneo 10",
      image: "/placeholder-tournament.jpeg",
      playerCount: "50",
      date: "20/10/2020",
      location: "Parque de la Paz",
      category: "Quinta Categoría",
    },
  ];
  const addTournament = (data) => {
    console.log(data);
  }


  return (
    <>
      <AddTournamentModal isOpen={isOpen} setIsOpen={setIsOpen} addTournament={addTournament} />
      <div className="background-page">
        <div className="sticky-navbar">
          <Navbar />
        </div>
        <div className="page-content">
          <div className="tournaments__header">
            <p className="tournaments__title">Torneos</p>
            <AddTournamentButton onClick={() => setIsOpen(true)}/>
          </div>
          <TournamentGrid tournaments={dummyTournaments} />
        </div>
        <Footer color={'black'} position={'relative'}></Footer>
      </div>
    </>
  );
};

export default Tournaments;
