import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

const Blog = ({data:{allStrapiBlog:{nodes:blogs}}}) => {

  return (
    <Layout>
      <SEO title="Blog" />
      <section className="blog-page">
        <Blogs blogs={blogs} title="blog" />
      </section>
    </Layout>
  )
}


export const query = graphql`
  query {
    allStrapiBlog {
      nodes {
        title
        date(formatString: "MMMM Do, YYYY")
        desc
        slug
        id
        category
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`

export default Blog
