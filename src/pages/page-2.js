import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Article from "../components/articledetail"
import Footer from "../components/footer"


const SecondPage = () => (
  // <Layout>
  <div>
    {/* <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p> */}
    {/* <Link to="/">Go back to the homepage</Link> */}
    <Header/>
    <Article/>
    <Footer />
  </div>
)

export default SecondPage
