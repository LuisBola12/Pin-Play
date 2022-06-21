import "./styles.scss";

const AddTournamentButton = ({ onClick }) => {
  return (
    <button className="tournaments__button" onClick={onClick}>
      <img src="/plus.png" alt="Agregar Torneo" />
      <p>Agregar Torneo</p>
    </button>
  );
};

export default AddTournamentButton;
