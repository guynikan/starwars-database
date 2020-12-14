import React from 'react'
import FilterableTable from './Components/FilterableTable'
import { DataStore } from './Context/DataStore'
import { PaginateStore } from './Context/PaginateStore'

function App () {
  return (
    <DataStore>
      <PaginateStore>
        <FilterableTable />
      </PaginateStore>
    </DataStore>
  )
}

export default App
