import React from 'react'
import GlobalContext from '../GlobalContext'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import { StyledTable } from '../Styled/Table'

function Table ({ filter }) {
  const { data, offset, PER_PAGE, setPageCount } = React.useContext(
    GlobalContext
  )

  function findNameMatch (wordToMatch, planet) {
    const regex = new RegExp(wordToMatch, 'gi')
    return planet.name.search(regex)
  }

  function hasFilter (filter) {
    return !!(filter.column && filter.comparison && filter.value)
  }

  function findMatches (filter, planet) {
    let result = true
    filter.filters.filterByNumericValues.forEach(filterItem => {
      if (hasFilter(filterItem)) {
        switch (filterItem.comparison) {
          case '===':
            result =
              Number(planet[filterItem.column]) === Number(filterItem.value)
            break
          case '>':
            result =
              Number(planet[filterItem.column]) > Number(filterItem.value)
            break
          case '<':
            result =
              Number(planet[filterItem.column]) < Number(filterItem.value)
            break

          default:
            result = false
        }
      }
    })
    return result
  }

  function renderData () {
    debugger
    const slice = data.slice(offset, offset + PER_PAGE)
    setPageCount(Math.ceil(data.length / PER_PAGE))

    return slice.map(planet => <TableRow planet={planet} key={planet.name} />)
  }

  function renderFilteringData () {
    // debugger
    return data.map(planet => {
      if (findNameMatch(filter.filters.filterByName.name, planet) === -1)
        return null
      if (filter.filters.hasFilter)
        if (!findMatches(filter, planet)) return null

      return <TableRow planet={planet} key={planet.name} />
    })
  }
  return (
    <StyledTable>
      <TableHeader />
      <tbody>
        {filter.filters.hasFilter ? renderFilteringData() : renderData()}
      </tbody>
    </StyledTable>
  )
}

export default Table
