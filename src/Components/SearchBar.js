import React from 'react'

function SearchBar ({ filter, onFilterTextChange }) {
  function handleFilterTextChange ({ target }) {
    onFilterTextChange(target.value)
  }
  return (
    <input
      type='text'
      placeholder='Pesquisar...'
      value={filter}
      onChange={handleFilterTextChange}
    />
  )
}

export default SearchBar
