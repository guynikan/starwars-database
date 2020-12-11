import React from 'react'
import Button from './Button'
import FilterColumn from './FilterColumn'
import FilterComparison from './FilterComparison'
import FilterValue from './FilterValue'
import FilterNumber from './FilterValue'

function FilterByNumericValues ({
  filter,
  setFilter,
  disable,
  onFilterChange,
  onAddFilterClick
}) {
  function handleFilterColumn (value, id) {
    onFilterChange(value, id)
  }

  function handleFilterComparison (value, id) {
    onFilterChange(value, id)
  }

  function handleFilterValue (value, id) {
    onFilterChange(value, id)
  }

  function handleClickFilter () {
    filter.filters.hasFilter = true
    setFilter({ ...filter })
  }

  function handleClick () {
    onAddFilterClick()
  }

  return (
    <>
      <FilterColumn
        filter={filter.column}
        onFilterColumnChange={handleFilterColumn}
      />
      <FilterComparison
        filter={filter.comparison}
        onFilterComparisonChange={handleFilterComparison}
      />
      <FilterNumber
        filter={filter.value}
        onFilterValueChange={handleFilterValue}
      />
      <Button handleClick={handleClickFilter}>Filtrar</Button>
      {disable && <Button handleClick={handleClick}>+</Button>}
    </>
  )
}

export default FilterByNumericValues
