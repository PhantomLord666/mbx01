import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

const ProjectsPage = ({data}) => {
  const {allStrapiProject:{nodes:projects}} = data;

  return (
    <Layout>
      <SEO title="Projects" />
      <section className="projects-page">
        <Projects projects={projects} title="All projects" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiProject {
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
  }
`

export default ProjectsPage
