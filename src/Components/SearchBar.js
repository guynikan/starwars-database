import React from 'react'
import { SearchInput } from '../Styled/Input'

function SearchBar ({ filter, onFilterTextChange }) {
  function handleFilterTextChange ({ target }) {
    onFilterTextChange(target.value)
  }
  return (
    <SearchInput
      type='text'
      placeholder='Search...'
      value={filter}
      onChange={handleFilterTextChange}
    />
  )
}

export default SearchBar
