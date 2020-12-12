import React from 'react'
import Select from '../Styled/Select'

function FilterColumn ({ filter, onFilterColumnChange }) {
  function handleFilterColumn ({ target }) {
    onFilterColumnChange(target.value, target.id)
  }

  return (
    <Select value={filter} id='column' onChange={handleFilterColumn}>
      <option value='' disabled>
        Column
      </option>
      <option value='population'>Population</option>
      <option value='diameter'>Diameter</option>
      <option value='rotation_period'>Rotation Period</option>
      <option value='orbital_period'>Orbital Period</option>
      <option value='surface_water'>Surface Water</option>
    </Select>
  )
}

export default FilterColumn
