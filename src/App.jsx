import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import { useState, useEffect } from 'react'
import userService from './utils/userService'
import * as locationApi from './utils/locationApi'

// Pages
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import SignupPage from './pages/SignupPage/SignupPage'
import LocationPage from './pages/LocationPage/LocationPage'
import PinnedLocationsPage from './pages/PinnedLocationsPage/PinnedLocationsPage'
import SearchPage from './pages/SearchPage/SearchPage'
import ForecastPreview from './components/ForecastPreview/ForecastPreview'

function App() {
  // Defining the state that will hold the logged in user if it finds a token or null if it does not
  const [user, setUser] = useState(userService.getUser())

  // Defining the state that updates to whatever location the user searches for
  const [searchedLocation, setSearchedLocation] = useState('')

  // Defining the state that will hold the locations found by the search bar
  const [foundLocations, setFoundLocations] = useState([])

  // Defining the state that will hold the current pinned locations by the user
  const [pinnedLocations, setPinnedLocations] = useState([])

  const [loading, setLoading] = useState(true)

  // This function will pass whatever the user searches for from the SearchBar component to the HomePage and update the state location that holds that information
  function getSearchedLocation(location) {
    setSearchedLocation(location)
  }

  // This function will update the user state every time someone logs in or signs up (it's called in LoginPage and SignupPage when the submit button is being handled)
  function handleSignUpOrLogin() {
    setUser(userService.getUser())
  }

  useEffect(() => {
    console.log('useEffect is running')
    // This function will search for different locations from the API
    async function searchForLocation() {
      const weatherApiUrl = `http://api.weatherapi.com/v1/search.json?key=f5cc5abf3e7d430c9f9155717230108&q=${searchedLocation}`
      try {
        const apiResponse = await fetch(weatherApiUrl)
        const data = await apiResponse.json()
        console.log('data > ', data)
        setFoundLocations(data)
      } catch (err) {
        console.log(err, ' error from API call')
      }
    }

    if (searchedLocation) searchForLocation()
  }, [searchedLocation])

  // This function will provide the list of all the user's pinned locations
  async function getPinnedLocations() {
    try {
      setLoading(true)
      const response = await locationApi.getAllLocations()
      // Getting the array of locations pinned by the user and setting them to the locations state
      setPinnedLocations(
        response.locations.map((location) => {
          return location.url
        })
      )
      setLoading(false)
    } catch (err) {
      console.log(err, ' error in getLocations')
      // setError
    }
  }

  useEffect(() => {
    getPinnedLocations()
  }, [])

  // This function will remove the JWT token from local storage and log the user out
  function handleLogOut() {
    setUser(userService.logout())
    setUser(null)
  }

  console.log(pinnedLocations, '!!!')

  const locations = pinnedLocations.map((pinnedLocation, idx) => {
    return <ForecastPreview pinnedLocation={pinnedLocation} key={idx} />
  })

  if (loading) {
    return <h1>loading....</h1>
  }

  // If there's not a user logged in, render the following routes
  if (!user) {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              getSearchedLocation={getSearchedLocation}
              user={user}
              handleLogOut={handleLogOut}
              pinnedLocations={pinnedLocations}
            />
          }
        />
        <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/search"
          element={
            <SearchPage
              getSearchedLocation={getSearchedLocation}
              foundLocations={foundLocations}
              user={user}
              handleLogOut={handleLogOut}
            />
          }
        />
        {/* Since no user is logged in, this route (/mylocations) will automatically redirect to the LoginPage */}
        <Route path="/locations" element={<Navigate to="/login" replace />} />
        <Route
          path="/:locationUrl"
          element={
            <LocationPage
              user={user}
              pinnedLocations={pinnedLocations}
              getPinnedLocations={getPinnedLocations}
              handleLogOut={handleLogOut}
            />
          }
        />
      </Routes>
    )
  }

  // If there's a user logged in, render the following routes
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            getSearchedLocation={getSearchedLocation}
            user={user}
            handleLogOut={handleLogOut}
            pinnedLocations={pinnedLocations}
          />
        }
      />
      <Route
        path="/login"
        element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route
        path="/signup"
        element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route
        path="/search"
        element={
          <SearchPage
            getSearchedLocation={getSearchedLocation}
            foundLocations={foundLocations}
            user={user}
            handleLogOut={handleLogOut}
          />
        }
      />
      <Route
        path="/locations"
        element={
          <PinnedLocationsPage
            pinnedLocations={pinnedLocations}
            getPinnedLocations={getPinnedLocations}
            user={user}
            handleLogOut={handleLogOut}
            locations={locations}
          />
        }
      />
      <Route
        path="/:locationUrl"
        element={
          <LocationPage
            user={user}
            pinnedLocations={pinnedLocations}
            getPinnedLocations={getPinnedLocations}
            handleLogOut={handleLogOut}
          />
        }
      />
    </Routes>
  )
}

export default App
