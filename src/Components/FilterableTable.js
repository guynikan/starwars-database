import React from 'react'
import ReactPaginate from 'react-paginate'
import Filter from './Filter'
import Table from './Table'
import Container from '../Styled/Container'
import StyledPaginateContainer from '../Styled/StyledPaginateContainer'
import Title from '../Styled/Title'
import PaginateContext from '../Context/PaginateStore'
import DataContext from '../Context/DataStore'

function FilterableTable () {
  const { requestRecursively, setData } = React.useContext(DataContext)

  const { offset, setCurrentPage, pageCount } = React.useContext(
    PaginateContext
  )

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

  function handlePageClick ({ selected: selectedPage }) {
    debugger
    setCurrentPage(selectedPage)
  }

  return (
    <Container>
      <Title>DEATH STAR 2.0</Title>
      <Filter filter={filter} setFilter={setFilter} />
      <Table filter={filter} setFilter={setFilter} />
      <StyledPaginateContainer>
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
      </StyledPaginateContainer>
    </Container>
  )
}

export default FilterableTable
