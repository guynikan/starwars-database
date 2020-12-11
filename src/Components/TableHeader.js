import React from 'react'

function TableHeader () {
  return (
    <thead>
      <tr>
        <th>Nome</th>
        <th>População</th>
        <th>Diâmetro</th>
        <th>Clima</th>
        <th>Gravidade</th>
        <th>Período de rotação</th>
        <th>Período orbital</th>
        <th>Água na superfície</th>
        <th>Terreno</th>
        {/* <th>Filmes</th> */}
        <th>Data de criação</th>
        <th>Editado em</th>
        <th>Url</th>
      </tr>
    </thead>
  )
}

export default TableHeader
