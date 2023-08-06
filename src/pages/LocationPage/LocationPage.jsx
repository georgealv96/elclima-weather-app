import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import './LocationPage.css'

import PinLocationButton from '../../components/PinLocationButton/PinLocationButton'
import PageHeader from '../../components/Header/Header'
import ForecastPreview from '../../components/ForecastPreview/ForecastPreview'

export default function LocationPage({
  user,
  pinnedLocations,
  getPinnedLocations,
  handleLogOut
}) {
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

  useEffect(() => {
    getForecastInfo()
  }, [])

  const isPinned = pinnedLocations.some((location) => location === locationUrl)

  return (
    <main className="LocationPage">
      <PageHeader user={user} handleLogOut={handleLogOut} />
      <section id="location-section">
        <h1>
          {locationData.city}, {locationData.region}, {locationData.country}
        </h1>
        <h3>{forecast.temp_f} degrees Celsius</h3>
        <img src={condition.icon} alt={condition.text} />
        <h3>{condition.text}</h3>
        <PinLocationButton
          locationData={locationData}
          user={user}
          isPinned={isPinned}
          getForecastInfo={getForecastInfo}
          getPinnedLocations={getPinnedLocations}
        />
      </section>
      {/* <ForecastPreview pinnedLocation={locationUrl} /> */}
    </main>
  )
}
