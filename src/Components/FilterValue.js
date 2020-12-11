import React from 'react'

function FilterValue ({ filter, onFilterValueChange }) {
  function handleFilterValue ({ target }) {
    onFilterValueChange(target.value, target.id)
  }
  return (
    <input
      id='value'
      type='number'
      value={filter}
      onChange={handleFilterValue}
    />
  )
}

export default FilterValue
