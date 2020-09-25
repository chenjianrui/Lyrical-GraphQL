import React, { useState } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const SongCreate = (props) => {
  const [songTitle, setSongTitle] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    
    // 與 GraphQL 連結後使用 mutate 來帶入值
    props.mutate({
      variables: {
        title: songTitle
      }
    })

  }
  return (
    <div>
      <h3>Create a New Song</h3>
      <form>
        <label>Song Title:</label>
        <input type="text" value={songTitle} onChange={e => setSongTitle(e.target.value)}/>
        <button type="submit" onClick={handleSubmit}>Submit</button>
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
