import React from "react"
import BestBooks from "../components/mainPage/BestBooks"
import Hero from "../components/mainPage/Hero"
import Layout from "../components/layout"
import SearchBook from "../components/mainPage/SearchBook"
import SEO from "../components/seo"
import Stats from "../components/mainPage/Stats"


const IndexPage = () => (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <BestBooks heading="Best books"/>
      <Stats />
      <SearchBook />
    </Layout>
)

export default IndexPage
