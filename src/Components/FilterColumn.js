import React from 'react'
import Select from './Form/Select'

function FilterColumn ({ onFilterColumnChange, filter, column }) {
  const columns = [
    'population',
    'diameter',
    'rotation_period',
    'orbital_period',
    'surface_water'
  ]

  function handleFilterColumn (value, id) {
    onFilterColumnChange(value, id)
  }

  return (
    <Select
      id={'column'}
      value={filter}
      handleChange={handleFilterColumn}
      column={column}
      options={columns}
    />
  )
}

export default FilterColumn
