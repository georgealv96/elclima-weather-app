import { useEffect, useState } from 'react'
import './PinnedLocationsPage.css'

import PageHeader from '../../components/Header/Header'

export default function PinnedLocationsPage({ user, handleLogOut, locations }) {
  return (
    <main className="PinnedLocationsPage">
      <PageHeader user={user} handleLogOut={handleLogOut} />
      <h1>My Locations</h1>
      <div id="locations-list-container">{locations}</div>
    </main>
  )
}
