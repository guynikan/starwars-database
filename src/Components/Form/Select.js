import React from 'react'
import StyledSelect from '../../Styled/StyledSelect'

function Select ({ id, value, handleChange, column, options }) {
  function onChange ({ target }) {
    handleChange(target.value, target.id)
  }

  function labelTreatment (label) {
    return label.charAt(0).toUpperCase() + label.slice(1).replace('_', ' ')
  }

  return (
    <StyledSelect id={id} value={value} onChange={onChange}>
      <option value='' disabled>
        {labelTreatment(id)}
      </option>
      {options.map(option => {
        if (id === 'column' || id === 'sort_column') {
          const isDisabled = id === 'column' ? column.includes(option) : false

          return (
            <option key={option} disabled={isDisabled} value={option}>
              {labelTreatment(option)}
            </option>
          )
        } else {
          let label
          switch (option) {
            case '===':
              label = 'Equal to'
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
