import React from 'react'
import ReactPaginate from 'react-paginate'
import '../Styled/App.css'
import Filter from './Filter'
import Table from './Table'
import GlobalContext from '../GlobalContext'
import Button from './Button'
import Container from '../Styled/Container'
import Pagination from '../Styled/Pagination'
import Title from '../Styled/Title'

function FilterableTable () {
  const {
    requestRecursively,
    setData,
    offset,
    setCurrentPage,
    pageCount
  } = React.useContext(GlobalContext)

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
    console.log('fez o request')
    requestRecursively('https://swapi-trybe.herokuapp.com/api/planets/').then(
      data => setData(data)
    )
  }, [offset])

  // function PreviousPage () {
  //   request(`${data.previous}`)
  // }

  // function NextPage () {
  //   request(`${data.next}`)
  // }

  function handlePageClick ({ selected: selectedPage }) {
    debugger
    setCurrentPage(selectedPage)
  }

  return (
    <Container>
      <Title>DEATH STAR 2.0</Title>
      <Filter filter={filter} setFilter={setFilter} />
      <Table filter={filter} setFilter={setFilter} />
      <Pagination>
        <ReactPaginate
          previousLabel={'prev'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </Pagination>
    </Container>
  )
}

export default FilterableTable
