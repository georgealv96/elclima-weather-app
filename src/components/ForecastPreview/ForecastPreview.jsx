import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './ForecastPreview.css'

import PinLocationButton from '../PinLocationButton/PinLocationButton'

export default function ForecastPreview({ pinnedLocation, scale }) {
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
    return null
  }

  return (
    <Link to={`/${pinnedLocation}`}>
      <div className="ForecastPreview">
        <h2>
          {location.location.name}, {location.location.region},{' '}
          {location.location.country}
        </h2>
        <img
          src={location.current.condition.icon}
          alt={location.current.condition.text}
        />
        <h3>{location.current.condition.text}</h3>
        {scale === 'f' ? (
          <h1>{Math.round(parseFloat(location.current.temp_f))} °F</h1>
        ) : (
          <h1>{Math.round(parseFloat(location.current.temp_c))} °C</h1>
        )}
        <h3>Humidity: {location.current.humidity}%</h3>
      </div>
    </Link>
  )
}
