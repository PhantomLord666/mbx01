import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  query {
    allStrapiJob(sort: {strapi_id: DESC}) {
      nodes {
        date
        position
        strapi_id
        desc {
          name
          id
        }
        company
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const { 
    allStrapiJob: { nodes: jobs },
  } = data;
  const [value, setValue]= React.useState(0)
  const {company, position, date, desc} = jobs[value]  
  //console.log(jobs);

  return (
    <section className="section jobs">
      <Title title="skills" />
<div class="containerx">

  <div class="cardx">
    <div class="face face1">
      <div class="content">
        <span class="stars"></span>
        <h2 class="java">Javascript</h2>
        <p class="java">Javascript is a very flexible programming language, used (both in the browser and on servers) to create functionalities, automate tasks, modify the structure of a page, etc. It is considered the official language of the web.</p>
      </div>
    </div>
    <div class="face face2">
      
      <img src="https://static-00.iconduck.com/assets.00/javascript-plain-icon-256x256-ianqz9kb.png"/>
    </div>
  </div>

  <div class="cardx">
    <div class="face face1">
      <div class="content">
        <span class="stars"></span>
        <h2 class="python">Python</h2>
        <p class="python">Python is an interpreted, high-level and general-purpose programming language.</p>
      </div>
    </div>
    <div class="face face2">
      
       <img src="https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png"/>
    </div>
  </div>

  <div class="cardx">
    <div class="face face1">
      <div class="content">
        <span class="stars"></span>
        <h2 class="cSharp">C#</h2>
        <p class="cSharp">C# is a general-purpose, multi-paradigm programming language encompassing static typing, strong typing, lexically scoped and component-oriented programming disciplines.</p>
      </div>
    </div>
    <div class="face face2">
      <img src="https://cdn.iconscout.com/icon/free/png-256/free-csharp-1175240.png?f=webp&w=256"/>
    </div>
  </div>
</div>
             <Link to="/about" className="btn center-btn">
          more info
        </Link>
    </section>
  )
}

export default Jobs
