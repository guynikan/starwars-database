import React from 'react'
import { NumericInput } from '../Styled/Input'

function FilterValue ({ filter, onFilterValueChange }) {
  function handleFilterValue ({ target }) {
    onFilterValueChange(target.value, target.id)
  }
  return (
    <NumericInput
      required
      id='value'
      placeholder='Enter numeric value'
      type='number'
      value={filter}
      onChange={handleFilterValue}
    />
  )
}

export default FilterValue
