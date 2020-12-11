import React from 'react'

function FilterColumn ({ filter, onFilterColumnChange }) {
  function handleFilterColumn ({ target }) {
    onFilterColumnChange(target.value)
  }

  return (
    <select value={filter} onChange={handleFilterColumn}>
      <option value='' disabled>
        Coluna
      </option>
      <option value='population'>População</option>
      <option value='diameter'>Diâmetro</option>
      <option value='rotation_period'>Período de rotação</option>
      <option value='orbital_period'>Período orbital</option>
      <option value='surface_water'>Água na superfície</option>
    </select>
  )
}

export default FilterColumn
