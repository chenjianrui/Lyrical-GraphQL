import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const SongList = (props) => {
  const { loading, songs } = props.data
  const renderList = () => songs.map(({title, id}) => (<li key={id} className='collection-item'>{title}</li>))

  if(loading){
    return <div>Loading...</div>
  }
  return (
    <ul className='collection'>
      { renderList() }
    </ul>
  )
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`

export default graphql(query)(SongList)
