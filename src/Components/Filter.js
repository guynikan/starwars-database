import React from 'react'
import Form from '../Styled/Form'
import Button from './Button'
import FilterByNumericValues from './FilterByNumericValues'
import SearchBar from './SearchBar'

function Filter ({ filter, setFilter }) {
  const [disable, setDisable] = React.useState(false)

  function handleFilterChange (value, item, id) {
    filter.filters.filterByNumericValues[item][id] = value
    setFilter({ ...filter })
  }

  function handleFilterTextChange (value) {
    filter.filters.hasFilter = true
    filter.filters.filterByName.name = value
    setFilter({ ...filter })
  }

  function handleAddFilterClick () {
    filter.filters.filterByNumericValues.push({
      column: '',
      comparison: '',
      value: ''
    })
    setFilter({ ...filter })
  }

  function handleClickFilter () {
    filter.filters.hasFilter = true
    setFilter({ ...filter })
  }

  function removeFilter (index) {
    filter.filters.filterByNumericValues.splice(index, 1)
    setFilter({ ...filter })
  }

  function handleSubmit (e) {
    e.preventDefault()
  }

  React.useEffect(() => {
    filter.filters.filterByNumericValues.forEach((filterItem, i, array) => {
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

  function pushNewArray () {
    return filter.filters.filterByNumericValues.map((filtro, i, array) => {
      let column = array.map(({ column }) => {
        return column
      })
      return (
        <FilterByNumericValues
          key={i}
          index={i}
          onFilterChange={handleFilterChange}
          onClickRemoveFilter={removeFilter}
          filter={filtro}
          column={column}
        />
      )
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <SearchBar
        filter={filter.filters.filterByName.name}
        onFilterTextChange={handleFilterTextChange}
      />
      {pushNewArray()}
      <Button disabled={!disable} handleClick={handleClickFilter}>
        Filter
      </Button>
      {disable && <Button handleClick={handleAddFilterClick}>+</Button>}
    </Form>
  )
}

export default Filter
