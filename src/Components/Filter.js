import React from 'react'
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
    filter.filters.hasFilter = true
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
    return filter.filters.filterByNumericValues.map((filtro, i) => {
      return (
        <FilterByNumericValues
          key={i}
          index={i}
          onFilterChange={handleFilterChange}
          onAddFilterClick={handleAddFilterClick}
          filter={filtro}
          setFilter={setFilter}
          clickFilter={handleClickFilter}
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
