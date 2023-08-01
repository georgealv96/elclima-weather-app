import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchBar({ getSearchedLocation }) {
  // Defining the state that updates the changes in the search bar
  const [searchForm, setSearchForm] = useState('')

  const navigate = useNavigate()

  function handleChange(e) {
    setSearchForm(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    getSearchedLocation(searchForm)
    setSearchForm('')
    navigate('/search')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="search for a city"
        value={searchForm}
        onChange={handleChange}
      />
      <button>SEARCH</button>
    </form>
  )
}
