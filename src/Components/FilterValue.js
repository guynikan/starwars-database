import React from 'react'

function FilterValue ({ filter, onFilterValueChange }) {
  function handleFilterValue ({ target }) {
    onFilterValueChange(target.value)
  }
  return <input type='number' value={filter} onChange={handleFilterValue} />
}

export default FilterValue
