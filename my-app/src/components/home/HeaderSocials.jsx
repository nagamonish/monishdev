import React from 'react'

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a href="https://www.instagram.com" className="home__social-link" target = "_blank">
        <i className="fa-brands fa-instagram"></i>
      </a>

      <a href="https://www.twitter.com" className="home__social-link" target = "_blank">
        <i className="fa-brands fa-twitter"></i>
      </a>

      <a href="https://www.behance.com" className="home__social-link" target = "_blank">
        <i className="fa-brands fa-behance"></i>
      </a>

      <a href="https://www.dribbble.com" className="home__social-link" target = "_blank">
        <i className="fa-brands fa-dribbble"></i>
      </a>

      <a href="https://www.linkedin.com" className="home__social-link" target = "_blank">
        <i className="fa-brands fa-linkedin"></i>
      </a>
    </div>
  )
}

export default HeaderSocials