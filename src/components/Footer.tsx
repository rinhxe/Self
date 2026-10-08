import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/rinhxe" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
        <a href="https://linkedin.com/in/rinhxe" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
      </div>
      <p className="footer-links">
        <a href="mailto:rinxef@gmail.com">rinxef@gmail.com</a>
        {' · '}
        <a href="https://rinxe.cloud" target="_blank" rel="noreferrer">Website</a>
        {' · '}
        <a href="https://twitter.com/daRinxxe" target="_blank" rel="noreferrer">Twitter</a>
      </p>
      <p>Portfolio of <a href="https://github.com/rinhxe" target="_blank" rel="noreferrer">Rinxe</a> with 💜</p>
    </footer>
  );
}

export default Footer;
