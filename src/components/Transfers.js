import React from "react"
import {useStaticQuery, graphql} from "gatsby"

const ReactMarkdown = require('react-markdown')

const Transfers = () => {
    const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: {path: {eq: "/transfers/"}}) {
        html
      }
    }`)
    return <ReactMarkdown
        source={data.markdownRemark.html}
        escapeHtml={false}
    />

    // <data.markdownRemark.html
    // JSON.stringify(data.markdownRemark.html, null, 4)
}

export default Transfers