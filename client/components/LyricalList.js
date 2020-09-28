import React from 'react'

const LyricalList = ({ lyrics }) => {

  const renderList = () => lyrics && lyrics.map(({ content, id }) => (<li className='collection-item' key={id}>{content}</li>))
  return (
    <ul className='collection'>
      {renderList()}
    </ul>
  )
}

export default LyricalList

