import React from "react"

const Title = ({ title }) => {
  return (
    <div className="section-title">
        <div id="borderLeft"></div>
      <h2>{title  || "default title"}</h2>
      
      <div id="borderBottom"></div>
    </div>

  )
}

export default Title
