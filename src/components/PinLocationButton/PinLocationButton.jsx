import * as locationApi from '../../utils/locationApi'

export default function PinLocationButton({ locationData, user }) {
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      // Defining the response from the back-end
      await locationApi.create(locationData)
    } catch (err) {
      console.log(err, ' error in handleSubmit PinLocationButton')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {user ? <button>PIN LOCATION</button> : null}
    </form>
  )
}
