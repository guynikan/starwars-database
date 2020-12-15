import React from 'react'
import { FilterContext } from '../Context/FilterStore'
import Input from './Form/Input'

function SearchBar () {
  const { filter, handleFilterTextChange } = React.useContext(FilterContext)
  const value = filter.filters.filterByName.name

  function handleChange (value) {
    handleFilterTextChange(value)
  }

  return (
    <Input
      id={'search'}
      name={'search'}
      placeholder={'Search...'}
      type={'text'}
      value={value}
      handleChange={handleChange}
    />
  )
}

export default SearchBar
