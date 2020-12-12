import React from 'react'
import Filter from './Filter'
import Table from './Table'
import GlobalContext from '../GlobalContext'
import Button from './Button'
import Container from '../Styled/Container'
import Pagination from '../Styled/Pagination'
import Title from '../Styled/Title'

function FilterableTable () {
  const { request, data } = React.useContext(GlobalContext)
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
    console.log('requisitou')
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
      <Container>
        <Title>DEATH STAR 2.0</Title>
        <Filter filter={filter} setFilter={setFilter} />
        <Table planets={data} filter={filter} setFilter={setFilter} />
        <Pagination>
          <Button handleClick={PreviousPage} disabled={!data.previous}>
            Previous
          </Button>
          <Button handleClick={NextPage} disabled={!data.next}>
            Next
          </Button>
        </Pagination>
      </Container>
    )
  )
}

export default FilterableTable
