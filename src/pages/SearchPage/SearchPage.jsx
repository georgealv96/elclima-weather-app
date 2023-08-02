import SearchBar from '../../components/SearchBar/SearchBar'
import FoundLocation from '../../components/FoundLocation/FoundLocation'

export default function SearchPage({ getSearchedLocation, foundLocations }) {
  const locations = foundLocations.map((location, idx) => (
    <FoundLocation key={idx} locationInfo={location} />
  ))
  return (
    <>
      <SearchBar getSearchedLocation={getSearchedLocation} />
      <ul>{locations}</ul>
    </>
  )
}
