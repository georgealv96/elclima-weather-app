import { useState } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import Header from '../../components/Header/Header'

export default function HomePage({ getSearchedLocation }) {
  return (
    <>
      <Header />
      <h1>This is the Home Page</h1>
      <SearchBar getSearchedLocation={getSearchedLocation} />
    </>
  )
}
