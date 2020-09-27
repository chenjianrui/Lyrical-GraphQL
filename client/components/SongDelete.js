import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import query from '../queries/fetchSongs'

const SongDelete = ({ id, mutate }) => {
  const handleDel = () => {
    mutate({
      variables: { id },
      refetchQueries: [{ query }]
    })
  }

  return (
    <span className='right'>
      <i className='material-icons' onClick={handleDel}>delete</i>
    </span>
  )
}

const mutation = gql`
  mutation DelSong ($id: ID){
    deleteSong (id: $id){
      id
    }
  }
`

export default graphql(mutation)(SongDelete)
