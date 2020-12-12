import React from 'react'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import { StyledTable } from '../Styled/Table'

function Table ({ planets, filter }) {
  function findNameMatch (wordToMatch, planet) {
    const regex = new RegExp(wordToMatch, 'gi')
    return planet.name.search(regex)
  }
  function findMatches (filter, planet) {
    let result
    filter.filters.filterByNumericValues.forEach(filtro => {
      switch (filtro.comparison) {
        case '===':
          result = Number(planet[filtro.column]) === Number(filtro.value)
          break
        case '>':
          result = Number(planet[filtro.column]) > Number(filtro.value)
          break
        case '<':
          result = Number(planet[filtro.column]) < Number(filtro.value)
          break

        default:
          result = false
      }
    })
    return result
  }

  return (
    <StyledTable>
      <TableHeader />
      <tbody>
        {planets.results.map(planet => {
          if (findNameMatch(filter.filters.filterByName.name, planet) === -1)
            return null
          if (filter.filters.hasFilter)
            if (!findMatches(filter, planet)) return null

          return <TableRow planet={planet} key={planet.name} />
        })}
      </tbody>
    </StyledTable>
  )
}

export default Table
