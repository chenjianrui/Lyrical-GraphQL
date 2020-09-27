import React, { useState } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { hashHistory, Link } from 'react-router'

import query from '../queries/fetchSongs'

const SongCreate = (props) => {
  const [songTitle, setSongTitle] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    
    // 與 GraphQL 連結後使用 mutate 來帶入值
    props.mutate({
      variables: {
        title: songTitle
      },
      /**
       * 因為 Apollo 有 cold cache and warm cache，假如我們在首頁重整後會 fetch 一次，而再進行
       * create song 結束後自動導向回首頁後，Apollo 會認為剛剛已經有 fetch songs 一次了，即使它知道有
       * mutation create song 也會實作 warm cache，而 refetchQueries 是強制 Apollo 
       * 再進行一次 fetch songs
       */
      refetchQueries: [{ query }]
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
