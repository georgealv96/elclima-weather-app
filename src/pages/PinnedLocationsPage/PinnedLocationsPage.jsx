import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './PinnedLocationsPage.css'

import PageHeader from '../../components/Header/Header'

export default function PinnedLocationsPage({ user, handleLogOut, locations }) {
  return (
    <main className="PinnedLocationsPage">
      <PageHeader user={user} handleLogOut={handleLogOut} />
      <h1>My Locations</h1>
      {locations.length > 0 ? (
        <div id="locations-list-container">{locations}</div>
      ) : (
        <div id="locations-empty-container">
          <p>It seems like you have no locations pinned.</p>
          <Link to="/search">
            <button>SEARCH LOCATIONS</button>
          </Link>
        </div>
      )}
    </main>
  )
}
