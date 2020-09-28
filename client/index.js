import './style/style.css'
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { Router, hashHistory, Route, IndexRoute } from 'react-router'

import App from './components/App'
import SongList from './components/SongList'
import SongCreate from './components/SongCreate'
import SongDetail from './components/SongDetail'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  // 這個讓你的 mutation 結果更新與 query 相應的 id
  dataIdFromObject: o => o.id
})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
          <Route path="/" exact component={App}>
            <IndexRoute component={SongList} />
            <Route path="songs/new" component={SongCreate}/>
            <Route path="songs/:id" component={SongDetail}/>
          </Route>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
