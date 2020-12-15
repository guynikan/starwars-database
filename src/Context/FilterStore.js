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
      ],

      order: {
        column: 'name',
        sort: 'ASC'
      }
    }
  })

  const filterByNumericValues = filter.filters.filterByNumericValues
  const filterByName = filter.filters.filterByName

  function handleFilter () {
    filter.filters.hasFilter = true
    setFilter({ ...filter })
  }

  function handleFilterChange (item, index, value) {
    debugger
    filter.filters.hasFilter = false
    filterByNumericValues[index][item] = value
    setFilter({ ...filter })
  }

  function handleFilterTextChange (value) {
    filter.filters.hasFilter = true
    filterByName.name = value
    setFilter({ ...filter })
  }

  function handleOrderColumn (value) {
    filter.filters.order.column = value
    setFilter({ ...filter })
  }

  function handleOrderSort (value) {
    filter.filters.order.sort = value
    setFilter({ ...filter })
  }

  function addFilter () {
    filterByNumericValues.push({
      column: '',
      comparison: '',
      value: ''
    })
    setFilter({ ...filter })
  }

  function removeFilter (index) {
    filterByNumericValues.splice(index, 1)
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
        handleOrderColumn,
        handleOrderSort,
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
