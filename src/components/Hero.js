import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import { FaQq } from "react-icons/fa"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
// ...GatsbyImageSharpFluid
import { TypeAnimation } from 'react-type-animation';

const query = graphql`
    query {
      file(relativePath: {eq: "hero-img3.png"}) {
        childImageSharp { 
            gatsbyImageData(layout: FULL_WIDTH) 
        }
      }
    }
  `

const Hero = () => {
  const {
    file:{
      childImageSharp: { gatsbyImageData } 
    },
  } = useStaticQuery(query);
  
  return <header className="hero" >
  <aside className="hero-image-opacity" >
    <div className="section-center hero-center">
      <article className="hero-info">
        <div>
          <div className="underline"></div>
          <h1>Hi <br/> I'm Manuel <br />Batres</h1>
            <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Web developer',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'Backend developer',
                  1000,
                  'Fronted developer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1.5em', fontFamily:'myFirstFont' ,   color: "#04DD99", display: 'inline-block' }}
                repeat={Infinity}
              />

              <div>&nbsp;</div>
          <Link to="/contact" className="btn" >
           contact me
          </Link>
          <SocialLinks />
        </div>
      </article>
      <GatsbyImage image={ gatsbyImageData } className="hero-img" alt="asdf"/> 
      <div class="circle-wrapper circle">
        <aside className="hero-image-opacity2" >
          <div class="circle first"></div>
          <div class="circle second"></div>
          <div class="circle third"></div>
          <div class="circle fourth"></div>
          <div class="circle fifth"></div>
          <div class="circle sixth"></div>
        </aside>
      </div>
    </div>
  </aside>  
  </header>
}

export default Hero
