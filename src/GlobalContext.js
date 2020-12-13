import React from 'react'
import useFetch from './Hooks/useFetch'

const PER_PAGE = 10

export const GlobalContext = React.createContext()

export const GlobalStorage = ({ children }) => {
  const [currentPage, setCurrentPage] = React.useState(0)
  const [pageCount, setPageCount] = React.useState(0)

  const offset = currentPage * PER_PAGE

  const {
    requestRecursively,
    getData,
    data,
    setData,
    error,
    loading
  } = useFetch()

  return (
    <GlobalContext.Provider
      value={{
        requestRecursively,
        getData,
        data,
        setData,
        error,
        loading,
        PER_PAGE,
        offset,
        currentPage,
        setCurrentPage,
        pageCount,
        setPageCount
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext
