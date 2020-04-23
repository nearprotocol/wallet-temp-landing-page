import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Content from "../components/content"
import Navigation from "../components/navigation"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Navigation />
    <Hero />
    <Content />
  </Layout>
)

export default IndexPage
