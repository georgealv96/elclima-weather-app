import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import { useState, useEffect } from 'react'
import userService from './utils/userService'

// Pages
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import SignupPage from './pages/SignupPage/SignupPage'
import LocationPage from './pages/LocationPage/LocationPage'
import PinnedLocationsPage from './pages/PinnedLocationsPage/PinnedLocationsPage'
import SearchPage from './pages/SearchPage/SearchPage'

function App() {
  // Defining the state that will hold the logged in user if it finds a token or null if it does not
  const [user, setUser] = useState(userService.getUser())

  // Defining the state that updates to whatever location the user searches for
  const [searchedLocation, setSearchedLocation] = useState('')

  const [foundLocations, setFoundLocations] = useState([])

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
    async function getWeatherInfo() {
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

    if (searchedLocation) getWeatherInfo()
  }, [searchedLocation])

  // If there's not a user logged in, render the following routes
  if (!user) {
    return (
      <Routes>
        <Route
          path="/"
          element={<HomePage getSearchedLocation={getSearchedLocation} />}
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
            />
          }
        />
        {/* Since no user is logged in, this route (/mylocations) will automatically redirect to the LoginPage */}
        <Route path="/mylocations" element={<Navigate to="/login" replace />} />
        <Route
          path="/:locationUrl"
          element={<LocationPage location={searchedLocation} />}
        />
      </Routes>
    )
  }

  // If there's a user logged in, render the following routes
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage getSearchedLocation={getSearchedLocation} />}
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
          />
        }
      />
      <Route path="/mylocations" element={<PinnedLocationsPage />} />
      <Route
        path="/:locationUrl"
        element={<LocationPage location={searchedLocation} />}
      />
    </Routes>
  )
}

export default App
