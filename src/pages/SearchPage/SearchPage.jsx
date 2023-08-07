import './SearchPage.css'
import SearchBar from '../../components/SearchBar/SearchBar'
import FoundLocation from '../../components/FoundLocation/FoundLocation'
import PageHeader from '../../components/Header/Header'

export default function SearchPage({
  getSearchedLocation,
  foundLocations,
  user,
  handleLogOut,
  changeScale,
  scale
}) {
  const locations = foundLocations.map((location, idx) => (
    <FoundLocation key={idx} locationInfo={location} />
  ))
  return (
    <main className="SearchPage">
      <PageHeader
        user={user}
        handleLogOut={handleLogOut}
        changeScale={changeScale}
        scale={scale}
      />
      <SearchBar getSearchedLocation={getSearchedLocation} />
      <ul>{locations}</ul>
    </main>
  )
}
