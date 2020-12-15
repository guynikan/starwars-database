import React from 'react'

function useFetch () {
  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(null)

  async function requestRecursively (url) {
    setLoading(true)
    const response = await fetch(url)
    let dados = await response.json()

    if (dados.next) {
      dados.results = dados.results.concat(
        await requestRecursively(`${dados.next}`)
      )
    }
    setLoading(false)

    return dados.results
  }

  return {
    requestRecursively,
    data,
    setData,
    error,
    loading
  }
}

export default useFetch
