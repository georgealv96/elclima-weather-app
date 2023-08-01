import { useState } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'

export default function HomePage({ getSearchedLocation }) {
  return (
    <>
      <h1>This is the Home Page</h1>
      <SearchBar getSearchedLocation={getSearchedLocation} />
    </>
  )
}
