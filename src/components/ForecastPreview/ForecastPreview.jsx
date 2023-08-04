import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function ForecastPreview({ pinnedLocation }) {
  // This is the base URL to the API to search for the specific location's current forecast
  const currentForecastUrl =
    'http://api.weatherapi.com/v1/current.json?key=f5cc5abf3e7d430c9f9155717230108&q='

  // Defining the state that will hold all of the location and its forecast data
  const [location, setLocation] = useState({})
  // Defining the state that will tell the app when the data is ready to be rendered
  const [loading, setLoading] = useState(true)

  async function getForecastInfo(locationUrl) {
    setLoading(true)
    const apiResponse = await fetch(currentForecastUrl + locationUrl)
    const data = await apiResponse.json()
    setLocation(data)
    setLoading(false)
  }

  useEffect(() => {
    getForecastInfo(pinnedLocation)
  }, [pinnedLocation])

  if (loading) {
    return <h1>loading....</h1>
  }

  return (
    <div>
      {location.location.name} = {location.current.condition.text}{' '}
      {location.current.temp_f}
    </div>
  )
}
