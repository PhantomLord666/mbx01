import React, { useState, useEffect } from "react"
import SocialLinks from "../constants/socialLinks"
import {
  FaCoffee,
  FaRegStar,
} from "react-icons/fa"
import { TbGitFork } from "react-icons/tb";
const Footer = () => {
const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
        fetch('https://api.github.com/repos/bchiang7/v4')
      .then(response => response.json())
      .then(json => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch(e => console.error(e));
  }, []);
  return (
    <footer className="footer">
      <div className="lll">
        <SocialLinks styleClass="footer-links"></SocialLinks>
         <h4></h4>
        <h4>

        <a href="https://github.com/PhantomLord666/my_app" target="_blank" rel="noopener noreferrer">
        Made with <FaCoffee> </FaCoffee> by Manuel Batres
          {githubInfo.stars && githubInfo.forks && (
            <div className="github-stats">
              <span>
                <FaRegStar> </FaRegStar>
                <span>{githubInfo.stars.toLocaleString()}</span>
              </span>
              <span>
                <TbGitFork></TbGitFork>
                <span>{githubInfo.forks.toLocaleString()}</span>
              </span>
            </div>
          )}
        </a>

        </h4>
               </div>
    </footer>
  )
}

export default Footer
