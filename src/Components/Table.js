import React from 'react'
import TableHeader from './TableHeader'
import TableRow from './TableRow'

function Table ({ planets, filter }) {
  function findNameMatch (wordToMatch, planet) {
    const regex = new RegExp(wordToMatch, 'gi')
    return planet.name.search(regex)
  }

  let column = filter.filters.filterByNumericValues.column
  let comparison = filter.filters.filterByNumericValues.comparison
  let value = Number(filter.filters.filterByNumericValues.value)
  console.log('filtro por coluna', column, comparison, value)

  function findMatches (planet) {
    let result
    switch (comparison) {
      case '===':
        result = Number(planet[column]) === value
        break
      case '>':
        result = Number(planet[column]) < value
        break
      case '<':
        result = Number(planet[column]) > value
    }

    return result
  }

  return (
    <table>
      <TableHeader />
      {planets.results.map(planet => {
        if (findNameMatch(filter.filters.filterByName.name, planet) === -1)
          return null
        if (filter.filters.hasFilter) if (!findMatches(planet)) return null

        return <TableRow planet={planet} key={planet.name} />
      })}
    </table>
  )
}

export default Table
