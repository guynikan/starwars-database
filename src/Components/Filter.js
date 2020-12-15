import React from 'react'
import FilterContext from '../Context/FilterStore'
import StyledForm from '../Styled/StyledForm'
import Button from './Form/Button'
import FilterByNumericValues from './FilterByNumericValues'
import FilterOrder from './FilterOrder'
import SearchBar from './SearchBar'

function Filter () {
  const {
    filter,
    setFilter,
    handleFilter,
    handleFilterChange,
    addFilter,
    disable,
    setDisable
  } = React.useContext(FilterContext)

  const filterByNumericValues = filter.filters.filterByNumericValues
  const filterByName = filter.filters.filterByName

  React.useEffect(() => {
    filterByNumericValues.forEach((filterItem, i, array) => {
      setDisable(() => {
        return (
          filterItem.column !== '' &&
          filterItem.comparison !== '' &&
          filterItem.value !== '' &&
          array.length < 5
        )
      })
    })
  }, [filter])

  React.useEffect(() => {
    if (!filterByName.name) {
      filter.filters.hasFilter = false
      setFilter({ ...filter })
    }
  }, [filter.filters.filterByName.name])

  React.useEffect(() => {
    if (!filter.filters.filterByNumericValues.length) {
      filter.filters.hasFilter = false
      setFilter({ ...filter })
    }
  }, [filter.filters.filterByNumericValues.length])

  function addFilters () {
    return filterByNumericValues.map((filtro, i, array) => {
      let column = array.map(({ column }) => {
        return column
      })
      return (
        <FilterByNumericValues
          key={i}
          index={i}
          onFilterChange={handleFilterChange}
          filter={filtro}
          column={column}
        />
      )
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <SearchBar />
      <FilterOrder />
      {addFilters()}
      <Button disabled={!disable} handleClick={handleFilter}>
        Filter
      </Button>
      {disable && <Button handleClick={addFilter}>+</Button>}
    </StyledForm>
  )
}

export default Filter
