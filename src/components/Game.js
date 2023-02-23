import React, { useState, useEffect } from "react";

export default function Game(props) {
    const [deck, setDeck] = useState(props.theCards)
    const [turn, setTurn] = useState('player')
    
    //remove cards in play from deck
    useEffect(() => {
        let newDeck = [...deck]
        newDeck.splice(0, 4)
        setDeck(newDeck)
    }, [])

    //add cards to the table
    const playerImgs = props.playerCards.map(c => {
        return <img src={c.url} alt={c.cardName} key={c.cardName} />
    })

    function hit() {
        let newDeck = [...deck]
        const newCard = newDeck.shift()
        if(turn === 'player') {
            props.setPlayerCards(prevState => [...prevState, newCard])
        } else {
            props.setComputerCards(prevState => [...prevState, newCard])
        }
        setDeck(newDeck)
    }

    useEffect(() => {
        calculateScore()
    }, [deck])

    function call() {
        if(turn === 'computer') {
            props.endGame()
            //calculateWinner()
        } else {
            setTurn('computer')
        }
    }

    function calculateScore() {
        let pScore = 0
        let cScore = 0
        console.log(props.playerCards)
        console.log(props.computerCards)

        //calculate scores
        for(let i = 0; i < props.playerCards.length; i++) {
            pScore+= props.playerCards[i].value
        }
        for(let j = 0; j < props.computerCards.length; j++) {
            cScore+= props.computerCards[j].value
        }

        //turn aces into 1 if over 21
        if(pScore > 21) {
            const isAce = props.playerCards.filter(c => c.ace)
            if(isAce.length >= 1) {
                pScore-= 10
                if(pScore > 21) {
                    if(isAce.length >= 2) {
                        pScore-= 10
                    } 
                }
            }
        }
        if(cScore > 21) {
            const isAce = props.computerCards.filter(c => c.ace)
            if(isAce.length >= 1) {
                cScore-= 10
                if(cScore > 21) {
                    if(isAce.length >= 2) {
                        cScore-= 10
                    }
                }
            } 
        }
        //check to see if busted
        if(pScore > 21) {
            console.log('busted')
            pScore = 'busted'
            setTurn('computer')
        }
        if(cScore > 21) {
            console.log('ya busted')
            cScore = 'busted'
            console.log(cScore)
            //end game and check winner
            props.setComputerScore(cScore)
            props.endGame()
        }

        console.log('does this run after end Game function')
        console.log(cScore)
        props.setPlayerScore(pScore)
        if(cScore === 'busted') {
            //dont run score again
        } else {
            console.log('please work')
            props.setComputerScore(cScore)
        }
    }

    return (
        <div className="game">
            <h1>Game</h1>
            <button onClick={call}>Call</button>
            <button onClick={hit}>Hit</button>
            {playerImgs}
        </div>
    )
}