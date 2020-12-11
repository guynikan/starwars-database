import React from 'react'
import FilterableTable from './Components/FilterableTable'
import { GlobalStorage } from './GlobalContext'

function App () {
  return (
    <GlobalStorage>
      <FilterableTable />
    </GlobalStorage>
  )
}

export default App
