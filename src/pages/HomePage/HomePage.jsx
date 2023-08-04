import { useState } from 'react'
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
  return (
    <main className="HomePage">
      <PageHeader user={user} handleLogOut={handleLogOut} />
      {user ? <h1>Welcome, User!</h1> : <h1>Welcome!</h1>}
      <SearchBar getSearchedLocation={getSearchedLocation} />
      <section>
        <div id="container-1"></div>
        <div id="container-2">
          <ForecastPreview
            pinnedLocation={
              pinnedLocations[
                Math.floor(Math.random() * pinnedLocations.length)
              ]
            }
          />
        </div>
      </section>
    </main>
  )
}
