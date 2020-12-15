import React from 'react'
import FilterContext from '../Context/FilterStore'
import Radio from './Form/Radio'
import Select from './Form/Select'

function Order () {
  const { filter, handleOrderColumn, handleOrderSort } = React.useContext(
    FilterContext
  )

  const columns = [
    'name',
    'population',
    'diameter',
    'climate',
    'rotation_period',
    'orbital_period',
    'surface_water',
    'terrain',
    'created',
    'edited',
    'url'
  ]

  function handleColumn (value) {
    handleOrderColumn(value)
  }

  function handleSort (value) {
    handleOrderSort(value)
  }

  return (
    <>
      <Select
        id='sort_column'
        value={filter.filters.order.column}
        handleChange={handleColumn}
        options={columns}
      ></Select>

      <Radio
        name={'order'}
        handleChange={handleSort}
        options={['ASC', 'DESC']}
      />
    </>
  )
}

export default Order
