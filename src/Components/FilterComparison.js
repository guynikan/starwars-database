import React from 'react'
import Select from './Form/Select'

function FilterComparison ({ filter, onFilterComparisonChange }) {
  const operators = ['===', '>', '<']

  function handleFilterComparison (value, id) {
    onFilterComparisonChange(value, id)
  }

  return (
    <Select
      id={'comparison'}
      value={filter}
      handleChange={handleFilterComparison}
      options={operators}
    />
  )
}

export default FilterComparison
