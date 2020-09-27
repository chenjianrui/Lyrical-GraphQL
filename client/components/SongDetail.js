import React from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'

import query from '../queries/fetchSong'

const SongDetail = ({ data }) => {
  const { loading, song } = data

  if(loading){
    return <div>Loading...</div>
  }
  return (
    <div>
      <Link to='/'>Back</Link>
      <h3>
        {song.title}
      </h3>
    </div>
  )
}

// query 時用這方法帶入 args
export default graphql(query, {
  options: (({ params }) => {
    const { id } = params
    return { variables: { id } }
  })
})(SongDetail)
