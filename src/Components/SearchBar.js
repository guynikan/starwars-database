import React from 'react'
import { FilterContext } from '../Context/FilterStore'
import { SearchInput } from '../Styled/StyledInput'
function SearchBar () {
  const { filter, handleFilterTextChange } = React.useContext(FilterContext)
  const value = filter.filters.filterByName.name

  function handleChange ({ target }) {
    handleFilterTextChange(target.value)
  }

  return (
    <SearchInput
      type='text'
      placeholder='Search...'
      value={value}
      onChange={handleChange}
    />
  )
}

export default SearchBar
