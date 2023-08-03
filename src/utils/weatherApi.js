async function searchLocation(location) {
  const weatherApiUrl = `http://api.weatherapi.com/v1/search.json?key=f5cc5abf3e7d430c9f9155717230108&q=${location}`
  try {
    const apiResponse = await fetch(weatherApiUrl)
    const data = await apiResponse.json()
    console.log('data > ', data)
    return data
  } catch (err) {
    console.log(err, ' error from API call')
  }
}

export default {
  searchLocation
}
