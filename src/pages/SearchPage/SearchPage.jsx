import SearchBar from '../../components/SearchBar/SearchBar'
import FoundLocation from '../../components/FoundLocation/FoundLocation'
import PageHeader from '../../components/Header/Header'

export default function SearchPage({
  getSearchedLocation,
  foundLocations,
  user,
  handleLogOut
}) {
  const locations = foundLocations.map((location, idx) => (
    <FoundLocation key={idx} locationInfo={location} />
  ))
  return (
    <>
      <PageHeader user={user} handleLogOut={handleLogOut} />
      <SearchBar getSearchedLocation={getSearchedLocation} />
      <ul>{locations}</ul>
    </>
  )
}
