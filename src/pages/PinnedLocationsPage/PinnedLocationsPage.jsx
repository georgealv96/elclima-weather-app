import { useEffect, useState } from 'react'

import ForecastPreview from '../../components/ForecastPreview/ForecastPreview'

export default function PinnedLocationsPage({ pinnedLocations }) {
  const locations = pinnedLocations.map((pinnedLocation, idx) => {
    return <ForecastPreview pinnedLocation={pinnedLocation} key={idx} />
  })
  return (
    <>
      <h1>My Locations</h1>
      {locations}
    </>
  )
}
