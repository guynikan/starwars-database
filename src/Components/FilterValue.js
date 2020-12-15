import React from 'react'
import Input from './Form/Input'

function FilterValue ({ filter, onFilterValueChange }) {
  function handleFilterValue (value, id) {
    onFilterValueChange(value, id)
  }
  return (
    <Input
      required
      id={'value'}
      placeholder={'Enter numeric value'}
      type={'number'}
      value={filter}
      handleChange={handleFilterValue}
    />
  )
}

export default FilterValue
