import { Header, Segment, Image, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function PageHeader({ user, handleLogOut }) {
  return (
    <nav>
      <Link to="/">
        <section id="logo">
          ElClima<span>weather</span>
        </section>
      </Link>
      {user ? (
        <section id="buttons-in">
          <Link to="/">
            <div>Home Page</div>
          </Link>
          <Link to="" onClick={handleLogOut}>
            <div>Log out</div>
          </Link>
        </section>
      ) : (
        <section id="buttons-out">
          <Link to="/login">
            <div>Log in</div>
          </Link>
          <Link to="/signup">
            <div>Sign up</div>
          </Link>
        </section>
      )}
    </nav>
  )
}
