import "./App.css";
import Friends from "./Friends";
import Team from "./Team";
import Users from "./Users";
import Counter from "./counter";

function App() {
  function handleClick() {
    alert("Button Clicked");
  }
  const handleclick2 = () => {
    alert("Button2 Clicked");
  };
  const addToFive = (num) => alert(num + 3);
  return (
    <>
      <h3>React Core Concept 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>click Me</button>
      <button onClick={handleclick2}>click Me 2</button>
      <button
        onClick={() => {
          alert("Third Clicked");
        }}
      >
        click Me 3
      </button>
      <button
        onClick={() => {
          addToFive(3);
        }}
      >
        Sum
      </button>
    </>
  );
}

export default App;
