import React from 'react'

function FilterComparison ({ filter, onFilterComparisonChange }) {
  function handleFilterComparison ({ target }) {
    onFilterComparisonChange(target.value, target.id)
  }

  return (
    <select value={filter} id='comparison' onChange={handleFilterComparison}>
      <option value='' disabled>
        Condição
      </option>
      <option value='==='>Igual a</option>
      <option value='<'>Menor que</option>
      <option value='>'>Maior que</option>
    </select>
  )
}

export default FilterComparison
