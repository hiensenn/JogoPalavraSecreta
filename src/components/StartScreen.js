import "./StartScreen.css";

function StartScreen({ startGame }) {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>clique no botao a baixo para comecar a jogar</p>
      <button onClick={startGame}>Começar</button>
    </div>
  );
}

export default StartScreen;
