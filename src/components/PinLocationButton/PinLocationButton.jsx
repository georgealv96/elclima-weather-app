import * as locationApi from '../../utils/locationApi'

export default function PinLocationButton({ locationData, user, isPinned }) {
  async function handleSubmit(e) {
    console.log(isPinned)
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
