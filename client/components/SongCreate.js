import React, { useState } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { hashHistory, Link } from 'react-router'

const SongCreate = (props) => {
  const [songTitle, setSongTitle] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    
    // 與 GraphQL 連結後使用 mutate 來帶入值
    props.mutate({
      variables: {
        title: songTitle
      }
    }).then(() => {
      hashHistory.push('/')
    })

  }
  return (
    <div>
      <Link to='/'>Back</Link>
      <h3>Create a New Song</h3>
      <form onSubmit={handleSubmit}>
        <label>Song Title:</label>
        <input type="text" value={songTitle} onChange={e => setSongTitle(e.target.value)}/>
      </form>
    </div>
  )
}

const mutation = gql`
  mutation AddSong ($title: String){
    addSong(title: $title){
      title
    }
  }
`

export default graphql(mutation)(SongCreate)
