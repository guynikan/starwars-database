import React from 'react'

function useFetch () {
  const [data, setData] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(null)

  async function request (url, options) {
    setLoading(true)
    await fetch(url, options)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => setError(error))
    setLoading(false)
  }
  return {
    data,
    setData,
    error,
    loading,
    request
  }
}

export default useFetch
