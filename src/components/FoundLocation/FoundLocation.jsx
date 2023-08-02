import { Link } from 'react-router-dom'

export default function FoundLocation(props) {
  return (
    <li>
      <Link to={`/${props.locationInfo.url}`}>
        {props.locationInfo.name}, {props.locationInfo.region},{' '}
        {props.locationInfo.country}
      </Link>
    </li>
  )
}
