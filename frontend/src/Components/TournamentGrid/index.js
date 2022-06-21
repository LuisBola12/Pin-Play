import TournamentCard from "./TournamentCard";
import "./styles.scss";

const TournamentGrid = ({ tournaments }) => {
  const renderTournaments = (tournaments) => {
    return tournaments.map((tournament) => {
      return <TournamentCard key={tournament.id} {...tournament} />;
    });
  };

  return (
    <div className="tournament-grid">{renderTournaments(tournaments)}</div>
  );
};

export default TournamentGrid;
