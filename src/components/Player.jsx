import { useState, useRef } from "react";

export default function Player() {
  const initialPlayerName = useRef();

  const [playerName, setPlayerName] = useState(null);

  const handleClick = () => {
    setPlayerName(
      initialPlayerName.current.value === ""
        ? null
        : initialPlayerName.current.value
    );

    initialPlayerName.current.value = "";
  };

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={initialPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
