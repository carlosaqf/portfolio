import * as React from "react"
import Layout from '../components/layout'
import { Hero, Projects, Blog, About, Contact } from '../components'

const IndexPage = () => {
  return (
    <>
      <Layout>
        <main>
          <Hero />  
          <Projects />
          <Blog />
          <About />
          <Contact />
        </main>
      </Layout>
    </>
  )
}

export default IndexPage
