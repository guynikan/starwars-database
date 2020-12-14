import React from 'react'
import ReactPaginate from 'react-paginate'
import Filter from './Filter'
import Table from './Table'
import PaginateContext from '../Context/PaginateStore'
import DataContext from '../Context/DataStore'
import { FilterStore } from '../Context/FilterStore'
import StyledContainer from '../Styled/StyledContainer'
import StyledPaginateContainer from '../Styled/StyledPaginateContainer'
import StyledTitle from '../Styled/StyledTitle'

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
    <StyledContainer>
      <StyledTitle>DEATH STAR 2.0</StyledTitle>

      <FilterStore>
        <Filter />
        <Table />
      </FilterStore>

      <StyledPaginateContainer>
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
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
    </StyledContainer>
  )
}

export default FilterableTable
