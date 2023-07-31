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
      <Title title="experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button key={item.strapi_id} 
               onClick={() => setValue(index)} 
              className={`job-btn ${index === value && "active-btn"}`}
                >
                {item.company}</button>
            )              
          })}
        </div>
          <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {
          desc.map((item) => {
            return (
                <div key={item.id} className="job-desc">
                  <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                  <p>{item.name}</p>
              </div>
            ) 
          })
        }
        </article>
      </div>
        <Link to="/about" className="btn center-btn">
          more info
        </Link>
    </section>
  )
}

export default Jobs