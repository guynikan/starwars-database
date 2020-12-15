import React from 'react'
import StyledRadio from '../../Styled/StyledRadio'

function Radio ({ name, handleChange, options }) {
  function onChange ({ target }) {
    handleChange(target.value)
  }
  return (
    <>
      {options.map(option => (
        <StyledRadio key={option}>
          <input type='radio' value={option} name={name} onChange={onChange} />
          {option}
        </StyledRadio>
      ))}
    </>
  )
}

export default Radio
