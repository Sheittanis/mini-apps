import React, { useState } from "react"
import Select from 'react-select';

import Layout from "../components/layout"
import SEO from "../components/seo"

import Selector from "../components/select.js"
import "./coinFlip.css"

const options = [
    { value: 6, label: 'D6 - Common cube' },
    { value: 8, label: 'D8 - Octahedron' },
    { value: 10, label: 'D10 - Pentagonal Trapezohedron' },
    { value: 12, label: 'D12 - Dodecahedron' },
    { value: 20, label: 'D20 - Icosahedron' },
];

const DiceRollPage = () => {
    const [coinImage, setCoinImage] = useState();
    const [rollResult, setRollResult] = useState();
    const [diceOne, setDiceOne] = useState(null);
    const [diceTwo, setDiceTwo] = useState(null);

    const roll = () => {
        let side = Math.floor((Math.random() * 2) + 1);

        setRollResult(side);
    }
    const rollBoth = () => {
        let side = Math.floor((Math.random() * 2) + 1);

        setRollResult(side);
    }

    function handleDiceOne(diceOne) {

        setDiceOne(diceOne)
    }

    function handleDiceTwo(diceTwo) {
        // this.setState({ selectedOption });
        setDiceTwo(diceTwo)
    };

    return (
        <Layout>
            <SEO title="Dice Roll" />
            <label>First Dice</label>
            <Selector options={options} setSelection={handleDiceOne}></Selector>
            <label>Second Dice</label>
            <Selector options={options} setSelection={handleDiceTwo}></Selector>
            <div>
                <img src={coinImage} alt=" " className="coinImage" />
            </div>
            <div className="coinImage" >
                <button className="actionButton" onClick={roll}>Roll</button>
            </div>
            <div>Dice One: {diceOne}</div>
            <div>Dice Two: {diceTwo}</div>
            <div>You rolled a: <span>{rollResult}</span></div>


        </Layout>
    )
}

export default DiceRollPage
