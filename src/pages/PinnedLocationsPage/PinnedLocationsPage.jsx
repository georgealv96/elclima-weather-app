import { useEffect, useState } from 'react'

import ForecastPreview from '../../components/ForecastPreview/ForecastPreview'
import PageHeader from '../../components/Header/Header'

export default function PinnedLocationsPage({
  pinnedLocations,
  getPinnedLocations,
  user,
  handleLogOut
}) {
  const locations = pinnedLocations.map((pinnedLocation, idx) => {
    return <ForecastPreview pinnedLocation={pinnedLocation} key={idx} />
  })
  return (
    <>
      <PageHeader user={user} handleLogOut={handleLogOut} />
      <h1>My Locations</h1>
      {locations}
    </>
  )
}
