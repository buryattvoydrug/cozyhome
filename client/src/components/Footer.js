import React from 'react'

import '../scss/components/Footer.scss'

function Footer() {
  return (
    <footer>
      <div className="footer-block">
        <div className="container">
          <div className="footer-top">
            <div className="footer-navbar">
              <a className="footer-navbar__buttons">shoppping bag</a>
            </div>
            <div className="footer__info">
              All information on this site is not true. The site is in the nature of a portfolio.
            </div>
          </div>
          <div className="footer-bottom">
            <span className="copyright">@buryattvoydug 2021</span>
            <div className="social">
              <a><img src="/images/youtube.svg"/></a>
              <a><img src="/images/facebook.svg"/></a>
              <a><img src="/images/instagram.svg"/></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
