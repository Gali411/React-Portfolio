import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '/src/App.css';

function Footer() {
  const currentPage = useLocation().pathname;

  return (
    <footer className="footer">
          <Link
            to="https://github.com/Gali411"
            className={currentPage === '/' ? 'footer-link active' : 'footer-link'}
            target="_blank"
          >
            <img 
              src='https://img.icons8.com/m_rounded/512/FFFFFF/github.png' 
              alt="GitHub Logo" 
              className="footer-icon" 
            />
          </Link>
    </footer>
  );
}

export default Footer;