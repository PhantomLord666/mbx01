import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import { GatsbyImage } from "gatsby-plugin-image"
import SEO from "../components/SEO"
const About = ({
  data: {
    about: { nodes },
  },
}) => {
  const{info, title,stack,image} = nodes[0]
  const {
    localFile:{
      childImageSharp: { gatsbyImageData } 
    },
  } = image;

  return (
    <Layout >
    <SEO title="About Me" description="about webdev" />
    <section className="about-page">
      <div className="section-center about-center">
        <GatsbyImage image={ gatsbyImageData }  alt="qwerty" className="about-img"/>
        <article className="about-text">
          <Title title={title} />
          <p>{info}</p>
          <div className="about-stack">
            {stack.map((item) => {
              return <span key={item.id}>{item.title}</span>
            })}
          </div>
        </article>
      </div>
    </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    about: allStrapiAbout {
      nodes {
        title
        info
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
        stack {
          title
          id
        }
      }
    }
  }
`

export default About
