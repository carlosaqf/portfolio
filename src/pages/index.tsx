import * as React from "react"
import "../scss/styles.scss"
import Layout from '../components/layout'

// markup
const IndexPage = () => {
  return (
    <Layout>
      <main>
        <title>Home Page</title>
        <h1>
          <span className="test">Hello World!</span>
          <br />
          <span>— you just made a Gatsby site! </span>
          🎉🎉🎉
        </h1>
      </main>
    </Layout>
  )
}

export default IndexPage
