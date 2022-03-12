import * as React from "react"
import Layout from '../components/layout'
import { Hero, Projects, Blog, About, Contact } from '../components'

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Hero />  
        <Projects />
        <Blog />
        <About />
        <Contact />
      </Layout>
    </>
  )
}

export default IndexPage
