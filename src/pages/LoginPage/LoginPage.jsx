import './LoginPage.css'
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from 'semantic-ui-react'
import { useState } from 'react'
import userService from '../../utils/userService'

export default function LoginPage({ handleSignUpOrLogin }) {
  // Defining the state that updates changes in the form
  const [state, setState] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState('')

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
      handleSignUpOrLogin()
    } catch (err) {
      setError('Check terminal and console')
      console.log(err, ' error in handleSubmit')
    }
  }

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="red" textAlign="center">
          Log in to your account
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              type="email"
              name="email"
              value={state.email}
              placeholder="e-mail address"
              onChange={handleChange}
              required
            />
            <Form.Input
              type="password"
              name="password"
              value={state.password}
              placeholder="password"
              onChange={handleChange}
              required
            />
            <Button color="yellow" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>New to us? Sign Up</Message>
      </Grid.Column>
    </Grid>
  )
}
