import TournamentCard from "./TournamentCard";
import "./styles.scss";

const TournamentGrid = ({ tournaments }) => {
  const renderTournaments = (tournaments) => {
    return tournaments.map((tournament, index) => {
      return <TournamentCard key={index} {...tournament} />;
    });
  };

  return (
    <div className="tournament-grid">{renderTournaments(tournaments)}</div>
  );
};

export default TournamentGrid;
