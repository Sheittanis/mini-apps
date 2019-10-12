import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const appChanged = () =>{
  console.log("test")
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>

    <div>
      <label htmlFor="appSelector">Select App</label>
      <select id="appSelector" name="appSelector" onChange={appChanged}>
        {/* <option value="" selected>Select app</option> */}
        <option value="Mr">Roll a dice</option>
        <option value="Miss">Coin Flip</option>
        <option value="Mrs">8 Ball</option>
        <option value="Mrs">RNGesus</option>
      </select>
    </div>



    <Link to="/page-2/">Go to page 2 (todo remove)</Link>
  </Layout>
)

export default IndexPage
