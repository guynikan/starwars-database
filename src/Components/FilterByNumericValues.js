import React from 'react'
import FiltersContainer from '../Styled/FiltersContainer'
import FilterColumn from './FilterColumn'
import FilterComparison from './FilterComparison'
import FilterValue from './FilterValue'

function FilterByNumericValues ({ filter, index, onFilterChange }) {
  function handleFilter (value, id) {
    onFilterChange(value, index, id)
  }

  return (
    <FiltersContainer>
      <FilterColumn
        filter={filter.column}
        onFilterColumnChange={handleFilter}
      />
      <FilterComparison
        filter={filter.comparison}
        onFilterComparisonChange={handleFilter}
      />
      <FilterValue filter={filter.value} onFilterValueChange={handleFilter} />
    </FiltersContainer>
  )
}

export default FilterByNumericValues
