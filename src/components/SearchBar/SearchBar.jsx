import { useState } from 'react'

export default function SearchBar() {
  // Defining the state that updates the changes in the search bar
  const [searchForm, setSearchForm] = useState('')

  function handleChange(e) {
    setSearchForm(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
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
