import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'

import query from '../queries/fetchSongs'
import SongDelete from './SongDelete'

const SongList = (props) => {
  const { loading, songs } = props.data
  const renderList = () => songs.map(({title, id}) => (<li key={id} className='collection-item'><Link to={`/songs/${id}`}>{title}</Link> <SongDelete id={id} /></li>))

  if(loading){
    return <div>Loading...</div>
  }
  return (
    <div>
      <ul className='collection'>
        { renderList() }
      </ul>
      <Link className="btn-floating btn-large red right" to='songs/new'><i className="material-icons">add</i></Link>
    </div>
  )
}

export default graphql(query)(SongList)
