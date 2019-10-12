import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import poundBack from "../images/Pound_coin_back.png"
import poundFront from "../images/Pound_coin_front.png"
import "./coinFlip.css"


const SecondPage = () => {
    const [coinImage, setCoinImage] = useState();
    const [headsCount, setHeadsCount] = useState(0);
    const [tailsCount, setTailsCount] = useState(0);

    const flipCoin = () => {
        let side = Math.floor((Math.random() * 2) + 1);

        if (side === 1) {
            setCoinImage(poundBack);
            setTailsCount(tailsCount + 1);
        }
        else {
            setCoinImage(poundFront);
            setHeadsCount(headsCount + 1)
        }
    }


    return (
        <Layout>
            <SEO title="Page two" />
            <div>
                <img src={coinImage} alt=" " className="coinImage" />
            </div>
            <div className="coinImage" >
                <button className="buttonC" onClick={flipCoin}>Flip</button>
            </div>
            <div>Head Count <span>{headsCount}</span></div>
            <div>Tails Count <span>{tailsCount}</span></div>

            <span className="verticalLine">asdasd</span>
        </Layout>
    )
}

export default SecondPage
