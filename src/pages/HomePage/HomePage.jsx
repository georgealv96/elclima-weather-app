import { useState } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import PageHeader from '../../components/Header/Header'

export default function HomePage({ getSearchedLocation, user, handleLogOut }) {
  return (
    <>
      <PageHeader user={user} handleLogOut={handleLogOut} />
      <h1>This is the Home Page</h1>
      <SearchBar getSearchedLocation={getSearchedLocation} />
    </>
  )
}
