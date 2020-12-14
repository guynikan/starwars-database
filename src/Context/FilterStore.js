import React from 'react'

export const FilterContext = React.createContext()

export const FilterStore = ({ children }) => {
  const [disable, setDisable] = React.useState(false)
  const [filter, setFilter] = React.useState({
    filters: {
      hasFilter: false,
      filterByName: {
        name: ''
      },
      filterByNumericValues: [
        {
          column: '',
          comparison: '',
          value: ''
        }
      ]
    }
  })

  function handleFilter () {
    filter.filters.hasFilter = true
    setFilter({ ...filter })
  }

  function handleFilterChange (item, index, value) {
    debugger
    filter.filters.hasFilter = false
    filter.filters.filterByNumericValues[index][item] = value
    setFilter({ ...filter })
  }

  function handleFilterTextChange (value) {
    filter.filters.hasFilter = true
    filter.filters.filterByName.name = value
    setFilter({ ...filter })
  }

  function addFilter () {
    filter.filters.filterByNumericValues.push({
      column: '',
      comparison: '',
      value: ''
    })
    setFilter({ ...filter })
  }

  function removeFilter (index) {
    filter.filters.filterByNumericValues.splice(index, 1)
    setFilter({ ...filter })
  }

  return (
    <FilterContext.Provider
      value={{
        filter,
        setFilter,
        handleFilter,
        handleFilterChange,
        handleFilterTextChange,
        addFilter,
        removeFilter,
        disable,
        setDisable
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export default FilterContext
