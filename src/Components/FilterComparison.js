import React from 'react'

function FilterComparison ({ filter, onFilterComparisonChange }) {
  function handleFilterComparison ({ target }) {
    onFilterComparisonChange(target.value)
  }

  return (
    <select value={filter} onChange={handleFilterComparison}>
      <option value='' disabled>
        Condição
      </option>
      <option value='maior que'>Maior que</option>
      <option value='menor que'>Menor que</option>
      <option value='igual a'>Igual a</option>
    </select>
  )
}

export default FilterComparison
