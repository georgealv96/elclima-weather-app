import { Header, Segment, Image, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function PageHeader() {
  return (
    <nav>
      <Link to="/">
        <section id="logo">
          ElClima<span>weather</span>
        </section>
      </Link>
      <section id="buttons">
        <Link to="/login">
          <div>Log in</div>
        </Link>
        <Link to="/signup">
          <div>Sign up</div>
        </Link>
      </section>
    </nav>
  )
}
