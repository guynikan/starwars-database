import React from 'react'
import StyledInput from '../../Styled/StyledInput'

function Input ({ id, handleChange, value, placeholder, type }) {
  function onChange ({ target }) {
    debugger
    handleChange(target.value, target.id)
  }

  return (
    <StyledInput
      type={type}
      id={id}
      name={id}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  )
}

export default Input
