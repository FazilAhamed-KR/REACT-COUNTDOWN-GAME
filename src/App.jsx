import Player from "./components/Player.jsx";
import TimeChallenge from "./components/TimeChallence.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenge title="Easy" targetTime={1} />
        <TimeChallenge title="Not Easy" targetTime={2} />
        <TimeChallenge title="Getting tough" targetTime={3} />
        <TimeChallenge title="Pros only" targetTime={5} />
      </div>
    </>
  );
}

export default App;
