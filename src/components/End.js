import React, { useState, useEffect } from "react";

export default function End(props) {
    const [winner, setWinner] = useState()
    //calculate winner
    useEffect(() => {
        let pScore = props.playerScore
        let cScore = props.computerScore
        if(pScore === 'busted') {
            pScore = 0
         }
        if(cScore === 'busted') {
            cScore = 0
            console.log('wtf')
        }

        if(pScore > cScore) {
            setWinner('Player')
        } else if(cScore > pScore) {
            console.log('hmmm')
            console.log(cScore)
            console.log(pScore)
            setWinner('Computer')
        } else if(cScore === pScore) {
            setWinner('Tie')
        }
    }, [])
   
    
    return (
        <div className="end">
            <h1>Game Over</h1>
            <h3>Player Score: {props.playerScore}</h3>
            <h3>Computer Score: {props.computerScore}</h3>
            <h3>The winner is {winner}</h3>
        </div>
    )
}