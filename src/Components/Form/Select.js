import React from 'react'
import StyledSelect from '../../Styled/StyledSelect'

function Select ({ id, value, handleChange, column, options }) {
  function onChange ({ target }) {
    handleChange(target.value, target.id)
  }

  return (
    <StyledSelect id={id} value={value} onChange={onChange}>
      <option value='' disabled>
        {id.charAt(0).toUpperCase() + id.slice(1)}
      </option>
      {options.map(option => {
        debugger
        if (id === 'column' || id === 'sort_column') {
          const isDisabled = id === 'column' ? column.includes(option) : false

          return (
            <option key={option} disabled={isDisabled} value={option}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </option>
          )
        } else {
          let label
          switch (option) {
            case '===':
              label = 'Equal To'
              break
            case '>':
              label = 'Greater than'
              break
            case '<':
              label = 'Less than'
              break
          }

          return (
            <option key={option} value={option}>
              {label}
            </option>
          )
        }
      })}
    </StyledSelect>
  )
}

export default Select
