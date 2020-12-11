import React from 'react'

function Button ({ children, handleClick, disabled }) {
  return (
    <button disabled={disabled} onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button
