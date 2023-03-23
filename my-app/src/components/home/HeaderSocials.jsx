import React from 'react'

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a href="https://www.github.com" className="home__social-link" target = "_blank">
        <i className="fa-brands fa-github"></i>
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