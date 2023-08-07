import '../../App.css'
import { useState } from 'react'
import userService from '../../utils/userService'
import { Link, useNavigate } from 'react-router-dom'

export default function LoginPage({ handleSignUpOrLogin }) {
  // Defining the state that updates changes in the form
  const [state, setState] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState('')

  const navigate = useNavigate()

  // Defining the function that handles any change in the form
  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      // Making the HTTP request to the server
      await userService.login(state)
      navigate('/')
      handleSignUpOrLogin()
    } catch (err) {
      setError('Check terminal and console')
      console.log(err, ' error in handleSubmit')
    }
  }

  return (
    <main className="LoginPage">
      <Link to="/">
        <div id="logo">
          ElClima<span>weather</span>
        </div>
      </Link>
      <section id="form-container">
        <Link to="/signup">
          <button>Create an account with us!</button>
        </Link>
        <div>Sign In</div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={state.email}
            placeholder="e-mail address"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            value={state.password}
            placeholder="password"
            onChange={handleChange}
            required
          />
          <button>Log in</button>
        </form>
      </section>
    </main>
  )
}
