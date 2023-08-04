import { useState } from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'
import SearchBar from '../../components/SearchBar/SearchBar'
import PageHeader from '../../components/Header/Header'
import ForecastPreview from '../../components/ForecastPreview/ForecastPreview'

export default function HomePage({
  getSearchedLocation,
  user,
  handleLogOut,
  pinnedLocations
}) {
  // These variables are used to calculate random values for the latitude and the longitude in decimal degree
  const minNumberLatitude = Math.ceil(-90)
  const maxNumberLatitude = Math.floor(90)
  const minNumberLongitude = Math.ceil(-180)
  const maxNumberLongitude = Math.floor(180)

  return (
    <main className="HomePage">
      <PageHeader user={user} handleLogOut={handleLogOut} />
      {user ? <h1>Welcome, User!</h1> : <h1>Welcome!</h1>}
      <SearchBar getSearchedLocation={getSearchedLocation} />
      <section>
        <div id="container-1">
          <ForecastPreview
            pinnedLocation={`${Math.floor(
              Math.random() * (maxNumberLatitude - minNumberLatitude) +
                minNumberLatitude
            )},${Math.floor(
              Math.random() * (maxNumberLongitude - minNumberLongitude) +
                minNumberLongitude
            )}`}
          />
        </div>
        {user ? (
          <div id="container-2">
            <ForecastPreview
              pinnedLocation={
                pinnedLocations[
                  Math.floor(Math.random() * pinnedLocations.length)
                ]
              }
            />
            <Link to="/locations">
              <button>ALL MY LOCATIONS</button>
            </Link>
          </div>
        ) : null}
      </section>
    </main>
  )
}
