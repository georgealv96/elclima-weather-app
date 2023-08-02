import { useEffect, useState } from 'react'

import ForecastPreview from '../../components/ForecastPreview/ForecastPreview'
import * as locationApi from '../../utils/locationApi'

export default function PinnedLocationsPage() {
  // This state will hold all of the locations the user has pinned
  const [locations, setLocations] = useState([])

  async function getLocations() {
    try {
      const response = await locationApi.getAllLocations()
      console.log(response)
    } catch (err) {
      console.log(err, ' error in getLocations')
      // setError
    }
  }

  useEffect(() => {
    getLocations()
  }, [])

  return (
    <>
      <h1>My Locations</h1>
      <ForecastPreview />
    </>
  )
}
