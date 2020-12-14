import React from 'react'

const PER_PAGE = 10

export const PaginateContext = React.createContext()

export const PaginateStore = ({ children }) => {
  const [currentPage, setCurrentPage] = React.useState(0)
  const [pageCount, setPageCount] = React.useState(0)

  const offset = currentPage * PER_PAGE

  return (
    <PaginateContext.Provider
      value={{
        PER_PAGE,
        offset,
        currentPage,
        setCurrentPage,
        pageCount,
        setPageCount
      }}
    >
      {children}
    </PaginateContext.Provider>
  )
}

export default PaginateContext
