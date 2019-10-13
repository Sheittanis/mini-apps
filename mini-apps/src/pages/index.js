import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>


    <h1>Developing mini apps while learning Gatsby :) </h1>
    <p>Sup!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default IndexPage
