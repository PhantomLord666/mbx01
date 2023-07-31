import React from "react"
import PropTypes from "prop-types"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { GatsbyImage } from "gatsby-plugin-image"
const Project = ({description,title,github,stack,url,image,index}) => {
  const {
    localFile:{
      childImageSharp: { gatsbyImageData } 
    },
  } = image;

  return (
    <article className="project">
      {image && (
        <GatsbyImage image={ gatsbyImageData }  alt="qwerty" className="project-img"/>
      )}
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{title || "default title"}</h3>
        <p className="project-desc">
          {description}
        </p>
          <div className="project-stack">
          {stack.map((item) => {
            return (<span key={item.id}>{item.title}</span>) 
          })}
        </div>
          <div className="project-link">
          <a href={github}>
            <FaGithubSquare className="project-icon"></FaGithubSquare>
          </a>
          <a href={url}>
            <FaShareSquare className="project-icon"></FaShareSquare>
          </a>

        </div>
      </div>
    </article>
  )
}

Project.propTypes = {
  title:PropTypes.string.isRequired,
  github:PropTypes.string.isRequired,
  url:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  image:PropTypes.object.isRequired,
  stack:PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project
