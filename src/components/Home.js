import React from "react";

export default function Home(props) {
    return (
        <div className="home">
            <h1>BlackJack</h1>
            <button onClick={props.startGame}>Start Game</button>
        </div>
    )
}