import { Header, Segment, Image, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function PageHeader({ user, handleLogOut, changeScale, scale }) {
  function handleClick(e) {
    e.preventDefault()
    changeScale()
  }
  return (
    <nav className="PageHeader">
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
          <Link to="/locations">
            <div>My Locations</div>
          </Link>
          <Link to="" onClick={handleLogOut}>
            <div>Log out</div>
          </Link>
          <Link to="" onClick={handleClick}>
            <div>°{scale.toUpperCase()}</div>
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
          <Link to="" onClick={handleClick}>
            <div>°{scale.toUpperCase()}</div>
          </Link>
        </section>
      )}
    </nav>
  )
}
