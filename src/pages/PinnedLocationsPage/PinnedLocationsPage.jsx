import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './PinnedLocationsPage.css'

import PageHeader from '../../components/Header/Header'

export default function PinnedLocationsPage({
  user,
  handleLogOut,
  locations,
  changeScale,
  scale
}) {
  return (
    <main className="PinnedLocationsPage">
      <PageHeader
        user={user}
        handleLogOut={handleLogOut}
        changeScale={changeScale}
        scale={scale}
      />
      <h1>My Locations</h1>
      <div id="locations-list-container">{locations}</div>
    </main>
  )
}
