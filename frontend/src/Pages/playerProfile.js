import React from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import { Header } from "../Components/PlayerProfile/Header";
import { RecentTourneys } from "../Components/PlayerProfile/RecentTourneys";
import { Footer } from "../Components/Footer/Footer";
import "../App.css";

const PlayerProfile = () => {
  return (
    <div className="complete-page">
      <div className="sticky-navbar">
        <Navbar />
      </div>
      <div className="page-content">
          <div className="player-profile-header">
            <Header />
          </div>
          <div className="player-recent-tourneys">
            <RecentTourneys/>
          </div>
      </div>
      <Footer color={'black'} position={'relative'}></Footer>
    </div>
  );
};

export default PlayerProfile;
