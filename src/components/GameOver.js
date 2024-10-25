import "./GameOver.css";

function GameOver({ retry, score }) {
  return (
    <div>
      <p>Fim de Jogo</p>
      <h2>A sua pontuacao foi : {score}</h2>
      <button onClick={retry}>
        <p>resetar jogo</p>
      </button>
    </div>
  );
}

export default GameOver;
