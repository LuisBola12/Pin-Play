import "./styles.scss";
import TournamentInfo from "./TournamentInfo";

const TournamentCard = (props) => {
  return (
    <div className="tournament">
      <img
        className="tournament__image"
        src={props.image}
        alt="Imagen Torneo"
      />
      <p className="tournament__name">{props.name}</p>
      <div className="tournament__divider" />
      <TournamentInfo type="user" text={`${props.playerCount} jugadores`} />
      <TournamentInfo type="date" text={props.date} />
      <TournamentInfo type="location" text={props.location} />
      <TournamentInfo type="category" text={props.category} />
    </div>
  );
};

export default TournamentCard;
