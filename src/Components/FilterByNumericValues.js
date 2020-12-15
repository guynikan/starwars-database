import React from 'react'
import { FilterContext } from '../Context/FilterStore'
import StyledFiltersContainer from '../Styled/StyledFiltersContainer'
import FilterColumn from './FilterColumn'
import FilterComparison from './FilterComparison'
import FilterValue from './FilterValue'
import Button from './Form/Button'

function FilterByNumericValues ({ index, column, filter }) {
  const { handleFilterChange, removeFilter } = React.useContext(FilterContext)

  function handleRemoveFilter () {
    removeFilter(index)
  }

  function handleFilter (value, id) {
    handleFilterChange(id, index, value)
  }

  return (
    <StyledFiltersContainer>
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
      <Button handleClick={handleRemoveFilter}>X</Button>
    </StyledFiltersContainer>
  )
}

export default FilterByNumericValues
