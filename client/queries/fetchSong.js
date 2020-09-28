import gql from 'graphql-tag'


const query = gql`
  query SongDetail($id: ID!){
    song (id: $id){
      id
      title
      lyrics {
        id
        content
      }
    }
  }
`
export default query