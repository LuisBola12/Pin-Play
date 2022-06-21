import "./styles.scss";

const TournamentInfo = (props) => {
  return (
    <div className="tournament-info">
      <div className={`tournament-info__img tournament-info__img--${props.type}`}>
        <img src={`/${props.type}.png`} alt={`info ${props.type}`} />
      </div>
      <p className="tournament-info__text">{props.text}</p>
    </div>
  );
};

export default TournamentInfo;
