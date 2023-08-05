import { Link } from 'react-router-dom'

export default function FoundLocation(props) {
  return (
    <li>
      <Link to={`/${props.locationInfo.url}`}>
        &#8680; {props.locationInfo.name}, {props.locationInfo.region},{' '}
        {props.locationInfo.country}
      </Link>
    </li>
  )
}
