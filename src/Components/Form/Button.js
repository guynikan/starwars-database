import React from 'react'
import StyledButton from '../../Styled/StyledButton'

function Button ({ children, handleClick, disabled }) {
  return (
    <StyledButton disabled={disabled} onClick={handleClick}>
      {children}
    </StyledButton>
  )
}

export default Button
