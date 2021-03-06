import React from "react"
import SEO from "../components/SEO"
import Layout from "../components/Layout"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title={"Not found!"} />
    <h1>404 Not found!</h1>
  </Layout>
)

export default IndexPage
