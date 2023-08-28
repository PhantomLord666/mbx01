import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

/*
*<section className="section projects">
      <Title title={title}/>
      <div className="section-center projects-center">
        {projects.map((project,index) => {
          return (
            <Project key={project.id} index={index} {...project} />
          )
        })}
      </div>
      {
        showLink && <Link to="/projects" className="btn center-btn"> 
        projects
      </Link>
    }
    </section>

*
*
* */

const Projects = ({projects, title, showLink}) => {
  return (
    <>
         <section id="portafolio" class="portfolio section-two"> 
     <div class="container full-lg-screen">     
      <h2 class="section-title-two">Featured Projects</h2>
      <a href="#trabajo-1" class="portfolio-card">
        <StaticImage src="../assets/e-commerce.webp" alt="Trabajo 1" className="static-image"/>
        <aside class="portfolio-card-info">
          <div>
            <h3>E-commerce</h3>
            <p>
             A project made with django as backend and react.js as fronted, optimazed to 
                  work perfectly by a API with graphql.
                </p>
          </div>
        </aside>
      </a>
      <a href="#trabajo-2" class="portfolio-card">
         <StaticImage src="../assets/portfolio-2.jpg" alt="Trabajo 2" className="static-image"/>
        <aside class="portfolio-card-info">
          <div>
            <h3>Proyecto 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deserunt repellat quod cupiditate
              fugiat
              impedit vel mollitia eligendi, cumque ipsum nemo repellendus vero asperiores earum non similique numquam
              recusandae totam?</p>
          </div>
        </aside>
      </a>
      <a href="#trabajo-3" class="portfolio-card">
        <StaticImage src="../assets/portfolio-3.jpg" alt="Trabajo 3" className="static-image"/>
        <aside class="portfolio-card-info">
          <div>
            <h3>Proyecto 3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deserunt repellat quod cupiditate
              fugiat
              impedit vel mollitia eligendi, cumque ipsum nemo repellendus vero asperiores earum non similique numquam
              recusandae totam?</p>
          </div>
        </aside>
      </a>
          </div> 
      {
        showLink && <Link to="/projects" className="btn center-btn"> 
        projects
      </Link>
      }
    </section>
    <article class="modal" id="trabajo-1">
    <div class="modal-content">
      <a href="#cerrar" class="modal-close">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M16.207,14.793l-1.414,1.414L12,13.414 l-2.793,2.793l-1.414-1.414L10.586,12L7.793,9.207l1.414-1.414L12,10.586l2.793-2.793l1.414,1.414L13.414,12L16.207,14.793z" />
        </svg>
      </a>
      <article class="portfolio-modal">
        <StaticImage src="../assets/portfolio-1.jpg" alt="Trabajo 1" className="static-image"/>
        <div class="portfolio-info">
          <h3>NOMBRE DEL PROYECTO 1</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquid delectus ea alias. Deserunt sunt
            inventore quos nulla rerum sit, recusandae unde temporibus ut cupiditate officiis, sint ea nam earum!</p>
          <aside class="portfolio-details">
            <small><b>CLIENTE:</b></small>
            <small>Nombre del Cliente</small>
            <small><b>FECHA:</b></small>
            <small>24/12/2020</small>
            <small><b>TIPO:</b></small>
            <small>Tipo de Proyecto</small>
            <small><b>ENLACE:</b></small>
            <small><a href="https://proyecto.com" target="_blank" rel="noopener">https://proyecto.com</a></small>
          </aside>
        </div>
      </article>
    </div>
  </article>
  <article class="modal" id="trabajo-2">
    <div class="modal-content">
      <a href="#cerrar" class="modal-close">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M16.207,14.793l-1.414,1.414L12,13.414 l-2.793,2.793l-1.414-1.414L10.586,12L7.793,9.207l1.414-1.414L12,10.586l2.793-2.793l1.414,1.414L13.414,12L16.207,14.793z" />
        </svg>
      </a>
      <article class="portfolio-modal">

        <StaticImage src="../assets/portfolio-2.jpg" alt="Trabajo 2"  layout="constrained" 
              width={1000} height={1000} className="static-image"/>
        <div class="portfolio-info">
          <h3>NOMBRE DEL PROYECTO 2</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquid delectus ea alias. Deserunt sunt
            inventore quos nulla rerum sit, recusandae unde temporibus ut cupiditate officiis, sint ea nam earum!</p>
          <aside class="portfolio-details">
            <small><b>CLIENTE:</b></small>
            <small>Nombre del Cliente</small>
            <small><b>FECHA:</b></small>
            <small>24/12/2020</small>
            <small><b>TIPO:</b></small>
            <small>Tipo de Proyecto</small>
            <small><b>ENLACE:</b></small>
            <small><a href="https://proyecto.com" target="_blank" rel="noopener">https://proyecto.com</a></small>
          </aside>
        </div>
      </article>
    </div>
  </article>
  <article class="modal" id="trabajo-3">
    <div class="modal-content">
      <a href="#cerrar" class="modal-close">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M16.207,14.793l-1.414,1.414L12,13.414 l-2.793,2.793l-1.414-1.414L10.586,12L7.793,9.207l1.414-1.414L12,10.586l2.793-2.793l1.414,1.414L13.414,12L16.207,14.793z" />
        </svg>
      </a>
      <article class="portfolio-modal">
        <StaticImage src="../assets/portfolio-3.jpg" alt="Trabajo 3" className="static-image"/>
        <div class="portfolio-info">
          <h3>NOMBRE DEL PROYECTO 3</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquid delectus ea alias. Deserunt sunt
            inventore quos nulla rerum sit, recusandae unde temporibus ut cupiditate officiis, sint ea nam earum!</p>
          <aside class="portfolio-details">
            <small><b>CLIENTE:</b></small>
            <small>Nombre del Cliente</small>
            <small><b>FECHA:</b></small>
            <small>24/12/2020</small>
            <small><b>TIPO:</b></small>
            <small>Tipo de Proyecto</small>
            <small><b>ENLACE:</b></small>
            <small><a href="https://proyecto.com" target="_blank" rel="noopener">https://proyecto.com</a></small>
          </aside>
        </div>
      </article>
    </div>
  </article>
  <article class="modal" id="trabajo-4">
    <div class="modal-content">
      <a href="#cerrar" class="modal-close">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M16.207,14.793l-1.414,1.414L12,13.414 l-2.793,2.793l-1.414-1.414L10.586,12L7.793,9.207l1.414-1.414L12,10.586l2.793-2.793l1.414,1.414L13.414,12L16.207,14.793z" />
        </svg>
      </a>
      <article class="portfolio-modal">
        <StaticImage src="../assets/portfolio-4.jpg" alt="Trabajo 4" className="static-image"/>
        <div class="portfolio-info">
          <h3>NOMBRE DEL PROYECTO 4</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquid delectus ea alias. Deserunt sunt
            inventore quos nulla rerum sit, recusandae unde temporibus ut cupiditate officiis, sint ea nam earum!</p>
          <aside class="portfolio-details">
            <small><b>CLIENTE:</b></small>
            <small>Nombre del Cliente</small>
            <small><b>FECHA:</b></small>
            <small>24/12/2020</small>
            <small><b>TIPO:</b></small>
            <small>Tipo de Proyecto</small>
            <small><b>ENLACE:</b></small>
            <small><a href="https://proyecto.com" target="_blank" rel="noopener">https://proyecto.com</a></small>
          </aside>
        </div>
      </article>
    </div>
  </article>
  <article class="modal" id="trabajo-5">
    <div class="modal-content">
      <a href="#cerrar" class="modal-close">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M16.207,14.793l-1.414,1.414L12,13.414 l-2.793,2.793l-1.414-1.414L10.586,12L7.793,9.207l1.414-1.414L12,10.586l2.793-2.793l1.414,1.414L13.414,12L16.207,14.793z" />
        </svg>
      </a>
      <article class="portfolio-modal">
        <StaticImage src="../assets/portfolio-5.jpg" alt="Trabajo 5" className="static-image"/>
        <div class="portfolio-info">
          <h3>NOMBRE DEL PROYECTO 5</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquid delectus ea alias. Deserunt sunt
            inventore quos nulla rerum sit, recusandae unde temporibus ut cupiditate officiis, sint ea nam earum!</p>
          <aside class="portfolio-details">
            <small><b>CLIENTE:</b></small>
            <small>Nombre del Cliente</small>
            <small><b>FECHA:</b></small>
            <small>24/12/2020</small>
            <small><b>TIPO:</b></small>
            <small>Tipo de Proyecto</small>
            <small><b>ENLACE:</b></small>
            <small><a href="https://proyecto.com" target="_blank" rel="noopener">https://proyecto.com</a></small>
          </aside>
        </div>
      </article>
    </div>
  </article>
  <article class="modal" id="trabajo-6">
    <div class="modal-content">
      <a href="#cerrar" class="modal-close">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M16.207,14.793l-1.414,1.414L12,13.414 l-2.793,2.793l-1.414-1.414L10.586,12L7.793,9.207l1.414-1.414L12,10.586l2.793-2.793l1.414,1.414L13.414,12L16.207,14.793z" />
        </svg>
      </a>
      <article class="portfolio-modal">
        <StaticImage src="../assets/portfolio-6.jpg" alt="Trabajo 6" className="static-image"/>
        <div class="portfolio-info">
          <h3>NOMBRE DEL PROYECTO 6</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquid delectus ea alias. Deserunt sunt
            inventore quos nulla rerum sit, recusandae unde temporibus ut cupiditate officiis, sint ea nam earum!</p>
          <aside class="portfolio-details">
            <small><b>CLIENTE:</b></small>
            <small>Nombre del Cliente</small>
            <small><b>FECHA:</b></small>
            <small>24/12/2020</small>
            <small><b>TIPO:</b></small>
            <small>Tipo de Proyecto</small>
            <small><b>ENLACE:</b></small>
            <small><a href="https://proyecto.com" target="_blank" rel="noopener">https://proyecto.com</a></small>
          </aside>
        </div>
      </article>
    </div> 
  </article>  
  
    </>
  )
}

export default Projects
