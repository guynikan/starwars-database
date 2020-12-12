import React from 'react'
import FiltersContainer from '../Styled/FiltersContainer'
import FilterColumn from './FilterColumn'
import FilterComparison from './FilterComparison'
import FilterValue from './FilterValue'

function FilterByNumericValues ({
  filter,
  index,
  onFilterChange,
  onClickRemoveFilter,
  column
}) {
  function handleFilter (value, id) {
    onFilterChange(value, index, id)
  }

  function removeFilter () {
    onClickRemoveFilter(index)
  }

  return (
    <FiltersContainer>
      <FilterColumn
        filter={filter.column}
        onFilterColumnChange={handleFilter}
        column={column}
      />
      <FilterComparison
        filter={filter.comparison}
        onFilterComparisonChange={handleFilter}
      />
      <FilterValue filter={filter.value} onFilterValueChange={handleFilter} />
      <button onClick={removeFilter}>X</button>
    </FiltersContainer>
  )
}

export default FilterByNumericValues
