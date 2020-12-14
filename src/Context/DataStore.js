import React from 'react'
import useFetch from '../Hooks/useFetch'

export const DataContext = React.createContext()

export const DataStore = ({ children }) => {
  const { requestRecursively, data, setData, error, loading } = useFetch()

  return (
    <DataContext.Provider
      value={{
        requestRecursively,
        data,
        setData,
        error,
        loading
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataContext
