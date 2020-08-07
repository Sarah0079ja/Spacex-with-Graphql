import React from 'react';
import logo from './logo.png';

import ApolloClient from 'apollo/client';
import {ApolloProvider} from 'apollo/client';

import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphl'
});
function App() {
  return (
    <ApolloProvider client={client}>
      
   
    <div className="container">
   <img src={logo} alt='spacex' style={{width:200, display: 'block', margin: 'auto'}} />
    </div>
    </ApolloProvider>
  );
}

export default App;
