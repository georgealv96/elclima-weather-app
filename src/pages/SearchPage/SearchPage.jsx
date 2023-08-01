import SearchBar from '../../components/SearchBar/SearchBar'

export default function SearchPage({ getSearchedLocation }) {
  return (
    <>
      <h1>
        This is the search page where all the items the api found will be listed
      </h1>
      <SearchBar getSearchedLocation={getSearchedLocation} />
    </>
  )
}
