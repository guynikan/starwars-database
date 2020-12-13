import React from 'react'
import Select from '../Styled/Select'

function FilterComparison ({ filter, onFilterComparisonChange }) {
  function handleFilterComparison ({ target }) {
    onFilterComparisonChange(target.value, target.id)
  }

  return (
    <Select
      required
      value={filter}
      id='comparison'
      onChange={handleFilterComparison}
    >
      <option value='' disabled>
        Comparison
      </option>
      <option value='==='>Equal to</option>
      <option value='<'>Less than</option>
      <option value='>'>Greater than</option>
    </Select>
  )
}

export default FilterComparison
