import React from 'react'
import Button from './Button'
import FilterColumn from './FilterColumn'
import FilterComparison from './FilterComparison'
import FilterValue from './FilterValue'

function FilterByNumericValues ({
  filter,
  setFilter,
  disable,
  index,
  clickFilter,
  onFilterChange,
  onAddFilterClick
}) {
  // function handleFilterColumn (value, id) {
  //   onFilterChange(value, item, id)
  // }

  // function handleFilterComparison (value, id) {
  //   onFilterChange(value, item, id)
  // }

  // function handleFilterValue (value, id) {
  //   onFilterChange(value, item, id)
  // }

  function handleFilter (value, id) {
    onFilterChange(value, index, id)
  }

  function handleClickFilter () {
    clickFilter()
  }

  function handleClick () {
    onAddFilterClick()
  }

  return (
    <>
      <FilterColumn
        filter={filter.column}
        onFilterColumnChange={handleFilter}
      />
      <FilterComparison
        filter={filter.comparison}
        onFilterComparisonChange={handleFilter}
      />
      <FilterValue filter={filter.value} onFilterValueChange={handleFilter} />
      <Button handleClick={handleClickFilter}>Filtrar</Button>
      {disable && <Button handleClick={handleClick}>+</Button>}
    </>
  )
}

export default FilterByNumericValues
