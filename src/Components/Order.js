import React from 'react'
import FilterContext from '../Context/FilterStore'
import StyledSelect from '../Styled/StyledSelect'

function Order () {
  const { filter, handleOrderColumn, handleOrderSort } = React.useContext(
    FilterContext
  )

  function handleColumn ({ target }) {
    handleOrderColumn(target.value)
  }

  function handleSort ({ target }) {
    handleOrderSort(target.value)
  }

  return (
    <>
      <StyledSelect
        required
        value={filter.filters.order.column}
        id='column'
        onChange={handleColumn}
      >
        <option value='' disabled>
          Column
        </option>
        <option value='name'>Name</option>
        <option value='population'>Population</option>
        <option value='diameter'>Diameter</option>
        <option value='climate'>Climate</option>
        <option value='rotation_period'>Rotation Period</option>
        <option value='orbital_period'>Orbital Period</option>
        <option value='surface_water'>Surface Water</option>
        <option value='terrain'>Terrain</option>
        <option value='created'>Created</option>
        <option value='edited'>Edited</option>
        <option value='url'>Url</option>
      </StyledSelect>
      <label style={{ alignSelf: 'center' }}>
        <input type='radio' value='ASC' name='order' onChange={handleSort} />
        ASC
      </label>
      <label style={{ alignSelf: 'center' }}>
        <input type='radio' value='DESC' name='order' onChange={handleSort} />
        DESC
      </label>
    </>
  )
}

export default Order
