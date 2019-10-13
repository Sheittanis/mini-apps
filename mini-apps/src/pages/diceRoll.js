import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Selector from "../components/select.js"
import "./diceRoll.css"

const options = [
    { value: 6, label: 'D6 - Common cube' },
    { value: 8, label: 'D8 - Octahedron' },
    { value: 10, label: 'D10 - Pentagonal Trapezohedron' },
    { value: 12, label: 'D12 - Dodecahedron' },
    { value: 20, label: 'D20 - Icosahedron' },
];

const DiceRollPage = () => {
    const [rollOneDisabled, setRollOneDisabled] = useState(true);
    const [rollTwoDisabled, setRollTwoDisabled] = useState(true);

    const [rollOneResult, setRollOneResult] = useState();
    const [rollTwoResult, setRollTwoResult] = useState();

    const [diceOne, setDiceOne] = useState(null);
    const [diceTwo, setDiceTwo] = useState(null);

    const roll = () => {
        let dOne = Math.floor((Math.random() * diceOne) + 1);

        setRollOneResult(dOne);
        setRollTwoResult(0);
    }

    const rollBoth = () => {
        let dOne = Math.floor((Math.random() * diceOne) + 1);
        let dTwo = Math.floor((Math.random() * diceTwo) + 1);

        setRollOneResult(dOne);
        setRollTwoResult(dTwo);
    }

    function handleDiceOne(diceOne) {
        setRollOneDisabled(false);
        setDiceOne(diceOne)
    }

    function handleDiceTwo(diceTwo) {
        setRollTwoDisabled(false);
        setDiceTwo(diceTwo)
    }

    return (
        <Layout>
            <SEO title="Dice Roll" />
            <label>First Dice</label>
            <Selector options={options} setSelection={handleDiceOne}></Selector>
            <label>Second Dice</label>
            <Selector options={options} setSelection={handleDiceTwo}></Selector>

            <div className="buttonContainer" >
                <button className="actionButton" onClick={roll} disabled={rollOneDisabled}>Roll</button>
                <button className="actionButton" onClick={rollBoth} disabled={rollTwoDisabled}>Roll Both</button>
            </div>
            <div className="diceContainer">
                {rollOneResult > 0 &&
                    <div className="fakeDice">
                        <h1 className="diceRoll">{rollOneResult}</h1>
                    </div>
                }

            </div>

            <div className="diceContainer">
                {rollTwoResult > 0 &&
                    <div className="fakeDice">
                        <h1 className="diceRoll">{rollTwoResult}</h1>
                    </div>
                }
            </div>
        </Layout>
    )
}

export default DiceRollPage
