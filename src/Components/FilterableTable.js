import React from 'react'
import Filter from './Filter'
import Table from './Table'
import GlobalContext from '../GlobalContext'
import Button from './Button'

function FilterableTable () {
  const { request, data, loading, error } = React.useContext(GlobalContext)
  const [filter, setFilter] = React.useState({
    filters: {
      hasFilter: false,
      filterByName: {
        name: ''
      },
      filterByNumericValues: [
        {
          column: '',
          comparison: '',
          value: ''
        }
      ]
    }
  })

  React.useEffect(() => {
    request('https://swapi-trybe.herokuapp.com/api/planets/')
  }, [])

  function PreviousPage () {
    request(`${data.previous}`)
  }

  function NextPage () {
    request(`${data.next}`)
  }

  return (
    data && (
      <div>
        <Filter filter={filter} setFilter={setFilter} />
        <Table planets={data} filter={filter} setFilter={setFilter} />
        <Button handleClick={PreviousPage} disabled={!data.previous}>
          Anterior
        </Button>
        <Button handleClick={NextPage} disabled={!data.next}>
          Próxima
        </Button>
      </div>
    )
  )
}

export default FilterableTable
