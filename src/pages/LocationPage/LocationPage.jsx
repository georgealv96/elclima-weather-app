import { useParams } from 'react-router'
import { useEffect, useState } from 'react'

import PinLocationButton from '../../components/PinLocationButton/PinLocationButton'

export default function LocationPage() {
  // This is the base URL to the API to search for the specific location's current forecast
  const currentForecastUrl =
    'http://api.weatherapi.com/v1/current.json?key=f5cc5abf3e7d430c9f9155717230108&q='

  // Taking the param name from the <Route path="/:locationUrl"> in the App.js
  const { locationUrl } = useParams()

  // This state holds the forecast information object from the API
  const [forecast, setForecast] = useState({})
  // This state holds the condition information object from the API
  const [condition, setCondition] = useState({})
  // This state holds the location information object from the API
  const [locationData, setLocationData] = useState({})

  useEffect(() => {
    async function getForecastInfo() {
      const apiResponse = await fetch(currentForecastUrl + locationUrl)
      const data = await apiResponse.json()
      setForecast(data.current)
      setCondition(data.current.condition)
      setLocationData({
        city: data.location.name,
        region: data.location.region,
        country: data.location.country,
        url: locationUrl
      })
    }

    getForecastInfo()
  }, [])

  return (
    <>
      <h1>
        {locationData.city}, {locationData.region}, {locationData.country}
      </h1>
      <h3>{forecast.temp_c} degrees Celsius</h3>
      <img src={condition.icon} alt={condition.text} />
      <h3>{condition.text}</h3>
      <PinLocationButton locationData={locationData} />
    </>
  )
}
