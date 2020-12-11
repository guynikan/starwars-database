import React from 'react'
import Button from './Button'
import FilterColumn from './FilterColumn'
import FilterComparison from './FilterComparison'
import FilterNumber from './FilterValue'
import SearchBar from './SearchBar'

function Filter ({ filter, setFilter }) {
  function handleFilterTextChange (value) {
    filter.filters.filterByName.name = value
    setFilter({ ...filter })
  }

  function handleFilterColumn (value) {
    filter.filters.filterByNumericValues.column = value
    setFilter({ ...filter })
  }

  function handleFilterComparison (value) {
    filter.filters.filterByNumericValues.comparison = value
    setFilter({ ...filter })
  }

  function handleFilterValue (value) {
    filter.filters.filterByNumericValues.value = value
    setFilter({ ...filter })
  }

  function handleClick () {
    filter.filters.hasFilter = true
    setFilter({ ...filter })
  }

  function handleSubmit (e) {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <SearchBar
        filter={filter.filters.filterByName.name}
        onFilterTextChange={handleFilterTextChange}
      />
      <FilterColumn
        filter={filter.filters.filterByNumericValues.column}
        onFilterColumnChange={handleFilterColumn}
      />
      <FilterComparison
        filter={filter.filters.filterByNumericValues.comparison}
        onFilterComparisonChange={handleFilterComparison}
      />
      <FilterNumber
        filter={filter.filters.filterByNumericValues.value}
        onFilterValueChange={handleFilterValue}
      />
      <Button handleClick={handleClick}>Filtrar</Button>
    </form>
  )
}

export default Filter
