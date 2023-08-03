import { useEffect, useState } from 'react'

import ForecastPreview from '../../components/ForecastPreview/ForecastPreview'

export default function PinnedLocationsPage({
  pinnedLocations,
  getPinnedLocations
}) {
  useEffect(() => {
    getPinnedLocations()
  }, [])

  return (
    <>
      <h1>My Locations</h1>
      <ForecastPreview locations={pinnedLocations} />
    </>
  )
}
