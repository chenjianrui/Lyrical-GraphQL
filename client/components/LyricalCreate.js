import React, { useState } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const LyricalCreate = ({ mutate, songId }) => {
  const [lyrical, setLyrical] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    /**
     * mutate 是個 Promise，所以看它完成後想做些什麼事
     */
    mutate({
      variables: {
        content: lyrical,
        songId
      },
    }).then(() => {
      setLyrical('')
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Add a Lyrical</label>
      <input type='text' onChange={e => setLyrical(e.target.value)} value={lyrical}/>
    </form>
  )
}

const mutation = gql`
  mutation AddSongToLyrical ($content: String, $songId: ID) {
    addLyricToSong (content: $content, songId: $songId) {
      id
      lyrics {
        id
        content,
        likes
      }
    }
  }
`

export default graphql(mutation)(LyricalCreate)
