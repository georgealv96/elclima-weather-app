import '../../App.css'
import { useState } from 'react'
import userService from '../../utils/userService'
import { Link, useNavigate } from 'react-router-dom'

export default function SignupPage({ handleSignUpOrLogin }) {
  // Defining the state that updates changes in the form
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    passwordConf: ''
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
      await userService.signup(state)
      navigate('/')
      handleSignUpOrLogin()
    } catch (err) {
      setError('Check terminal and console')
      console.log(err, ' error in handleSubmit')
    }
  }

  return (
    <main className="SignupPage">
      <div id="logo">
        ElClima<span>weather</span>
      </div>
      <section id="form-container">
        <h1>Signing up is FREE!</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={state.name}
            placeholder="first name"
            onChange={handleChange}
            required
          />
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
          <input
            type="password"
            name="passwordConf"
            value={state.passwordConf}
            placeholder="password confirmation"
            onChange={handleChange}
            required
          />
          <button>Sign up</button>
        </form>
        <div id="message">
          Already have an account with us? <Link to="/login">Log in</Link>
        </div>
      </section>
    </main>

    // <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
    //   <Grid.Column style={{ maxWidth: 450 }}>
    //     <Header as="h2" color="purple" textAlign="center">
    //       Sign Up
    //     </Header>
    //     <Form autoComplete="off" onSubmit={handleSubmit}>
    //       <Segment stacked>
    //         <Form.Input
    //           name="username"
    //           placeholder="first name"
    //           value={state.name}
    //           onChange={handleChange}
    //           required
    //         />
    //         <Form.Input
    //           type="email"
    //           name="email"
    //           placeholder="email"
    //           value={state.email}
    //           onChange={handleChange}
    //           required
    //         />
    //         <Form.Input
    //           name="password"
    //           type="password"
    //           placeholder="password"
    //           value={state.password}
    //           onChange={handleChange}
    //           required
    //         />
    //         <Form.Input
    //           name="passwordConf"
    //           type="password"
    //           placeholder="Confirm Password"
    //           value={state.passwordConf}
    //           onChange={handleChange}
    //           required
    //         />
    //         <Button type="submit" className="btn">
    //           Signup
    //         </Button>
    //       </Segment>
    //     </Form>
    //     <Message>
    //       Already have an account? <Link to="/login">Sign In</Link>
    //     </Message>
    //   </Grid.Column>
    // </Grid>
  )
}
