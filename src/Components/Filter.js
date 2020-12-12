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
    filter.filters.filterByNumericValues.forEach(filtro => {
      setDisable(() => {
        return (
          filtro.column !== '' &&
          filtro.comparison !== '' &&
          filtro.value !== ''
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
          disable={disable}
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
      <Button handleClick={handleClickFilter}>Filter</Button>
      {disable && <Button handleClick={handleAddFilterClick}>+</Button>}
    </Form>
  )
}

export default Filter
