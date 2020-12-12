import React from 'react'
import Select from '../Styled/Select'

function FilterColumn ({ filter, onFilterColumnChange, column }) {
  function handleFilterColumn ({ target }) {
    onFilterColumnChange(target.value, target.id)
  }

  return (
    <Select value={filter} id='column' onChange={handleFilterColumn}>
      <option value='' disabled>
        Column
      </option>
      <option disabled={column.includes('population')} value='population'>
        Population
      </option>
      <option disabled={column.includes('diameter')} value='diameter'>
        Diameter
      </option>
      <option
        disabled={column.includes('rotation_period')}
        value='rotation_period'
      >
        Rotation Period
      </option>
      <option
        disabled={column.includes('orbital_period')}
        value='orbital_period'
      >
        Orbital Period
      </option>
      <option disabled={column.includes('surface_water')} value='surface_water'>
        Surface Water
      </option>
    </Select>
  )
}

export default FilterColumn
