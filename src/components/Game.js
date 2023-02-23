import React, { useState, useEffect } from "react";

export default function Game(props) {
    const [deck, setDeck] = useState(props.theCards)
    const [turn, setTurn] = useState('player')
    
    useEffect(() => {
        let newDeck = [...deck]
        newDeck.splice(0, 4)
        setDeck(newDeck)
    }, [])

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

        for(let i = 0; i < props.playerCards.length; i++) {
            pScore+= props.playerCards[i].value
        }
        for(let j = 0; j < props.computerCards.length; j++) {
            cScore+= props.computerCards[j].value
        }
        if(pScore > 21) {
            const isAce = props.playerCards.filter(c => c.ace)
            if(isAce.length >= 1) {
                console.log('hmmm')
                pScore-= 10
                if(pScore > 21) {
                    console.log('you busted')
                }
            } else {
                console.log('you busted')
                setTurn('computer')
            }
        }
        if(cScore > 21) {
            const isAce = props.playerCards.filter(c => c.ace)
            if(isAce) {
                cScore-= 10
            } else {
                console.log('you busted')
                //setTurn('computer')
            }
        }
        props.setPlayerScore(pScore)
        props.setComputerScore(cScore)
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