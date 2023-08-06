import { useEffect, useState } from 'react'
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
        <h2>You have no pinned locations!</h2>
      )}
    </main>
  )
}
