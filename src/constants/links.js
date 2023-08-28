import React from "react"
import { Link } from "gatsby"
const data = [ 
  {
    id: 2,
    text: "about",
    url: "/about/",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects/",
  },
  {
    id: 4,
    text: "blog",
    url: "/blog/",
  },
  {
    id: 5,
    text: "contact",
    url: "/contact/",
  },
  {
    id: 6,
    text: "resume",
    url: "/resume/",
  },
]

const ResumeLink = (
    <a className="resume-button" title="Resume.pdf" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
      resume
    </a>
  );

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      {link.id === 6 ? (ResumeLink): (<Link to={link.url}>{link.text}</Link>)}
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
