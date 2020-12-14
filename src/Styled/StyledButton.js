import styled, { css } from 'styled-components'

export default styled.button`
  cursor: pointer;
  box-shadow: 2px 2px 2px #575757;
  background: whitesmoke;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1.125em;

  ${props =>
    props.children !== 'X' &&
    css`
      flex: 1;
      padding: 5px 10px;
      margin: 10px 10px;
    `}
`
