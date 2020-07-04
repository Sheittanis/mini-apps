import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./coinFlip.css"
import moment from "moment"
import { func } from "prop-types"


const CountToPage = () => {
    const [input, setInput] = useState(''); // '' is the initial state value
    const [time, setTime] = useState(new Date());
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        function tick() {
            setTime(new Date());
            compareDates();
            // console.log(time)
        }

        var interval = setInterval(() => tick(), 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    function compareDates() {
        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

        // var x = moment.utc(moment(time,"DD/MM/YYYY HH:mm:ss").diff(moment(tomorrow,"DD/MM/YYYY HH:mm:ss"))).format("DD HH:mm:ss")    
        // console.log(x)

        const now = moment(time);
        const expiration = moment(tomorrow);

        // get the difference between the moments
        const diff = expiration.diff(now);

        //express as a duration
        const diffDuration = moment.duration(diff);

        // display
        setDisplay(diffDuration)
    }

    function setDisplay(remaining) {
        setDays(remaining.days())
        setHours(remaining.hours())
        setMinutes(remaining.minutes())
        setSeconds(remaining.seconds())
        // https://stackoverflow.com/questions/41875679/get-the-days-hours-and-minutes-in-moment-js
    }

    function handleInputChange(data) {
        console.log(data)
        setInput(data)
    }

    return (
        <Layout>
            <SEO title="Count To" />
            <div>
                <h1>Current time: {time.toLocaleTimeString()}</h1>
            </div>
            <label>Count to: </label>
            <input type='date' value={input} onChange={e => handleInputChange(e.target.value)} />
            <input type='time' value={input} onChange={e => handleInputChange(e.target.value)} />
            {/* <input type='date'  onChange={() => handleInputChange("data") } ></input> */}


            <div>
                <h1>Remaining:</h1>
                <h2>{days} days</h2>
                <h2>{hours} hours</h2>
                <h2>{minutes} minutes</h2>
                <h2>{seconds} seconds</h2>
            </div>
        </Layout>
    )
}

export default CountToPage
