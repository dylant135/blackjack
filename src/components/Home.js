import React from "react";

export default function Home(props) {
    return (
        <div className="home">
            <button onClick={props.startGame}>Start Game</button>
        </div>
    )
}