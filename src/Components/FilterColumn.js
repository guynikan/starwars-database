import React from 'react'
import StyledSelect from '../Styled/StyledSelect'

function FilterColumn ({ onFilterColumnChange, filter, column }) {
  const id = React.useRef()

  function handleFilterColumn ({ target }) {
    debugger
    onFilterColumnChange(target.value, target.id)
  }

  return (
    <StyledSelect
      required
      value={filter}
      id='column'
      ref={id}
      onChange={handleFilterColumn}
    >
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
    </StyledSelect>
  )
}

export default FilterColumn
