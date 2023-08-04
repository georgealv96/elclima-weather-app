import { useState } from 'react'
import './HomePage.css'
import SearchBar from '../../components/SearchBar/SearchBar'
import PageHeader from '../../components/Header/Header'

export default function HomePage({ getSearchedLocation, user, handleLogOut }) {
  return (
    <main className="HomePage">
      <PageHeader user={user} handleLogOut={handleLogOut} />
      {user ? <h1>Welcome, User!</h1> : <h1>Welcome!</h1>}
      <SearchBar getSearchedLocation={getSearchedLocation} />
    </main>
  )
}
