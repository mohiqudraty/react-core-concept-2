import { useState } from "react";

export default function Team() {
  const [team, setteam] = useState(11);
  const handleAdd = () => {
    const newTeam = team + 1;
    setteam(newTeam);
  };
  const handleRemove = () => {
    setteam(team - 1);
  };
  const teamStyle = {
    border: "2px solid yellow",
    padding: "20px",
    borderRadius: "20px",
  };

  return (
    <div style={teamStyle}>
      <h3>Players: {team} </h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
