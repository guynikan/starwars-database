import React from 'react'
import TableHeader from './TableHeader'
import TableRow from './TableRow'

function Table ({ planets, filter }) {
  function findMatches (wordToMatch, planet) {
    const regex = new RegExp(wordToMatch, 'gi')
    return planet.name.search(regex)
  }

  return (
    <table>
      <TableHeader />
      {planets.results.map(planet => {
        if (findMatches(filter.filters.filterByName.name, planet) === -1)
          return null

        return <TableRow planet={planet} key={planet.name} />
      })}
    </table>
  )
}

export default Table
