import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {  GatsbyImage } from "gatsby-plugin-image"
const Blog = ({id, title,image,date,category,slug,desc}) => {
   const {
    localFile:{
      childImageSharp: { gatsbyImageData } 
    },
  } = image;
  return (
    <Link to={`/blog/${slug}`} className="blog" key={id}>
      <article>
        {image && (
          <GatsbyImage image={ gatsbyImageData }  alt="qwerty" className="blog-img"/>
        )}
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{desc}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>

  )
}

Blog.propTypes = {
  id:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  date:PropTypes.string.isRequired,
  category:PropTypes.string.isRequired,
  desc:PropTypes.string.isRequired,
  slug:PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}

export default Blog
