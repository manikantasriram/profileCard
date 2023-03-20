import React from "react";
import "./Footer.css";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
  return (
    <div class="footer">
      <h1>Manikanta Sriram</h1>
      <p>React Developer</p>
      <hr className="line" />
      <div className="social-icons">
        <IconButton>
        <a href="mailto:manikantasriram98@gmail.com" target="_blank" rel="noreferrer">
        <MailIcon sx={{ fontSize: 40 }} color="primary" />
        </a>
        </IconButton>
        <IconButton>
        <a href="https://github.com/manikantasriram" target="_blank" rel="noreferrer">
        <GitHubIcon sx={{ fontSize: 40 }} color="primary" />
        </a>
        </IconButton>
        <IconButton>
        <a href="https://www.linkedin.com/in/manekanttasriram/" target="_blank" rel="noreferrer">
        <LinkedInIcon sx={{ fontSize: 40 }} color="primary" />
        </a>
        </IconButton>
      </div>
    </div>
  );
};

export default Footer;
