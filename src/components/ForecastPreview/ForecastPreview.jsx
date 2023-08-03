import { Link } from 'react-router-dom'

export default function ForecastPreview({ locations }) {
  const pinnedLocations = locations.map((location, idx) => {
    return (
      <div key={idx}>
        <Link to={`/${location.url}`}>
          {location.city}, {location.country}
        </Link>
      </div>
    )
  })
  return <>{pinnedLocations}</>
}
