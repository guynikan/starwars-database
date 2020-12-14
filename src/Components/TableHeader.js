import React from 'react'
import StyledTableHead from '../Styled/StyledTableHead'

function TableHeader () {
  return (
    <StyledTableHead>
      <tr>
        <th>Name</th>
        <th>Population</th>
        <th>Diameter</th>
        <th>Climate</th>
        <th>Gravity</th>
        <th>Rotation Period</th>
        <th>Orbital Period</th>
        <th>Surface Water</th>
        <th>Terrain</th>
        {/* <th>Filmes</th> */}
        <th>Created</th>
        <th>Edited</th>
        <th>Url</th>
      </tr>
    </StyledTableHead>
  )
}

export default TableHeader
