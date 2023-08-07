import { useState } from 'react'
import * as locationApi from '../../utils/locationApi'

export default function PinLocationButton({
  locationData,
  user,
  isPinned,
  getForecastInfo,
  getPinnedLocations
}) {
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      if (isPinned) {
        // Defining the response from the back-end
        await locationApi.removeLocation(locationData.url)
      } else {
        await locationApi.create(locationData)
      }
      getPinnedLocations()
      getForecastInfo()
    } catch (err) {
      console.log(err, ' error in handleSubmit PinLocationButton')
    }
  }

  return (
    <form onSubmit={handleSubmit} id="pin-button">
      {user ? (
        isPinned ? (
          <button>UNPIN LOCATION</button>
        ) : (
          <button>PIN LOCATION</button>
        )
      ) : null}
    </form>
  )
}
