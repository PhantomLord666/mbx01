import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

<SEO title="Home" description="this is our home page" />

const Home = ({data}) => {
  const {
    allStrapiProject:{nodes:projects},
    allStrapiBlog:{nodes:blogs}
  } = data;

  return (
    <Layout>
      <SEO title="Home" description="this is our home page" />
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="featured projects"
        showLink />
      <Blogs blogs={blogs} title="blog" showLink/>
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiProject(filter: {featured: {eq: true}}) {
      nodes {
        github
        id
        description
        title
        url
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
     allStrapiBlog(sort: {date: DESC}, limit: 3) {
      nodes {
        title
        date(formatString: "MMMM Do, YYYY")
        desc
        slug
        content {
          data {
            content
          }
        }
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

export default Home;
// ...GatsbyImageSharpFluid
