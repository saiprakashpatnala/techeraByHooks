import {Link} from 'react-router-dom'

import {Nav, Img} from './style'

import './index.css'

const Header = () => (
  <Nav>
    <Link className="link-element" to="/">
      <Img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        className="website logo"
      />
    </Link>
  </Nav>
)

export default Header
