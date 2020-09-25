import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { Router, hashHistory, Route, IndexRoute } from 'react-router'

import App from './components/App'
import SongList from './components/SongList'
import SongCreate from './components/SongCreate'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
          <Route path="/" exact component={App}>
            <IndexRoute component={SongList} />
            <Route path="song/new" component={SongCreate}/>
          </Route>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
