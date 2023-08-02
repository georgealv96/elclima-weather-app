export default function ForecastPreview({ locations }) {
  const pinnedLocations = locations.map((location, idx) => {
    return (
      <div key={location.idx}>
        <h1>{location.city}</h1>
      </div>
    )
  })
  return <>{pinnedLocations}</>
}
