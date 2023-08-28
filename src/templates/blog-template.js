import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  materialDark,
  materialLight,
  oneLight,
  nord,
} from 'react-syntax-highlighter/dist/cjs/styles/prism'


const ComponentName = ({data}) => {
  const {  title, desc, date } = data.blogs
  const {content:{
    data: {content}
  },
  } = data.blogs
  return (
    <Layout>
      <base target="_blank" />
      <SEO title={title} description={desc} />
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content"> 
            <h1>{title}</h1>
            <h5>{date} by Manuel Batres</h5>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
           <ReactMarkdown children={content} components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  language={match[1]}
                  style={nord}
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        />
          </article>
        </div>
      </section>
    </Layout>
  )
}

 export const query = graphql`
   query GetSingleBlog($slug: String) {
     blogs: strapiBlog(slug: { eq: $slug }) {
       title
       desc
       date(formatString: "MMMM DD, yyyy")
       content{
          data{
            content
          }
        }
     }
   }
 `

export default ComponentName
