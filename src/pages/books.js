import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Books from "../components/booksPage/Books"

const books = () => (
  <Layout>
    <SEO title="Book Searcher" />
    <Books />
  </Layout>
)

export default books
