import styled from 'styled-components'

export const Table = styled.table`
  margin: 0 auto;
  border-radius: 5px;
  background: whitesmoke;
  box-shadow: 2px 2px 2px #575757;
  border-spacing: 0.5rem;
  border-collapse: collapse;

  td,
  th {
    border: 1px solid #e6e6e6;
    text-align: left;
    padding: 0.5rem;
  }

  tbody > tr:nth-child(odd) {
    background: #e6e6e6;
  }
`

export const StyledTable = styled(Table)``
