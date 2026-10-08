import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://avatars.githubusercontent.com/u/61826953?v=4" alt="Rinxe" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/rinhxe" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
            <a href="https://linkedin.com/in/rinhxe" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
          </div>
          <h1>Rinxe</h1>
          <p>Game &amp; Cross-platform Developer</p>
          <p className="tagline">Building apps that make everyday life easier and more connected.</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/rinhxe" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
            <a href="https://linkedin.com/in/rinhxe" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;