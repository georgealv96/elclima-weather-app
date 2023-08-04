import { useEffect, useState } from 'react'

import PageHeader from '../../components/Header/Header'

export default function PinnedLocationsPage({ user, handleLogOut, locations }) {
  return (
    <>
      <PageHeader user={user} handleLogOut={handleLogOut} />
      <h1>My Locations</h1>
      {locations}
    </>
  )
}
