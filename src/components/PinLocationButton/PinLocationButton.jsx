import * as locationApi from '../../utils/locationApi'

export default function PinLocationButton({ locationData }) {
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      // Defining the response from the back-end
      const responseData = await locationApi.create(locationData)
    } catch (err) {
      console.log(err, ' error in handleSubmit PinLocationButton')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <button>PIN LOCATION</button>
    </form>
  )
}
