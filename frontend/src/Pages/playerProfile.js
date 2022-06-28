import React from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import { Header } from "../Components/PlayerProfile/Header";
import { RecentTourneys } from "../Components/PlayerProfile/RecentTourneys";
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
      <footer>&copy; PinPlay - UCR</footer>
    </div>
  );
};

export default PlayerProfile;
