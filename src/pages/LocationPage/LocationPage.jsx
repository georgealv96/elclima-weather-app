import { useParams } from 'react-router'
import { useEffect, useState } from 'react'

export default function LocationPage() {
  // This is the base URL to the API to search for the specific location's current forecast
  const currentForecastUrl =
    'http://api.weatherapi.com/v1/current.json?key=f5cc5abf3e7d430c9f9155717230108&q='

  // Taking the param name from the <Route path="/:locationUrl"> in the App.js
  const { locationUrl } = useParams()

  console.log(locationUrl)
  const [forecast, setForecast] = useState({})
  const [location, setLocation] = useState({})
  const [condition, setCondition] = useState({})

  useEffect(() => {
    async function getForecastInfo() {
      const apiResponse = await fetch(currentForecastUrl + locationUrl)
      const data = await apiResponse.json()
      console.log(data, '<<<---')
      setForecast(data.current)
      setLocation(data.location)
      setCondition(data.current.condition)
    }

    getForecastInfo()
  }, [])

  return (
    <>
      <h1>
        {location.name}, {location.region}, {location.country}
      </h1>
      <h3>{forecast.temp_c} degrees Celsius</h3>
      <img src={condition.icon} alt={condition.text} />
      <h3>{condition.text}</h3>
    </>
  )
}
