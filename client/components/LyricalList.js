import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const LyricalList = ({ lyrics, mutate }) => {

  const handleOnLike = id => {
    mutate({
      variables: { id }
    })
  }

  const renderList = () => lyrics && lyrics.map(({ content, id, likes }) => (
    <li className='collection-item' key={id}>
      {content} 
      <div className='right' style={{ display: 'flex', alignItems: 'center' }}>
        <i className='material-icons' onClick={() => handleOnLike(id)}>thumb_up</i>
        <span style={{ marginLeft: '5px' }}>{likes}</span>
      </div>
    </li>
  ))
  return (
    <ul className='collection'>
      {renderList()}
    </ul>
  )
}

const mutation = gql`
  mutation OnLikeLyric($id: ID){
    likeLyric(id: $id){
      id,
      likes,
      content
    }
  }
`

export default graphql(mutation)(LyricalList)

