import React from 'react'
import FilterByNumericValues from './FilterByNumericValues'
import SearchBar from './SearchBar'

function Filter ({ filter, setFilter }) {
  const [disable, setDisable] = React.useState(false)
  const [newFilter, setNewFilter] = React.useState(false)

  function handleFilterChange (value, id) {
    filter.filters.filterByNumericValues.map(filtro => {
      filtro[id] = value
      setFilter({ ...filter })
    })
  }

  function handleFilterTextChange (value) {
    filter.filters.filterByName.name = value
    setFilter({ ...filter })
  }

  function handleAddFilterClick () {
    console.log('adicionar novo array')
    filter.filters.filterByNumericValues.push({
      column: '',
      comparison: '',
      value: ''
    })
    setFilter({ ...filter })
  }

  function handleSubmit (e) {
    e.preventDefault()
  }

  React.useEffect(() => {
    filter.filters.filterByNumericValues.map(filtro => {
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
    return filter.filters.filterByNumericValues.map(filtro => {
      return (
        <FilterByNumericValues
          onFilterChange={handleFilterChange}
          onAddFilterClick={handleAddFilterClick}
          filter={filtro}
          setFilter={setFilter}
          disable={disable}
        />
      )
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <SearchBar
        filter={filter.filters.filterByName.name}
        onFilterTextChange={handleFilterTextChange}
      />
      {pushNewArray()}
    </form>
  )
}

export default Filter
