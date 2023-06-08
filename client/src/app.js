import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Home from './pages/Home';
import Community from './pages/Community';
import Resources from './pages/Resources';
import Header from './components/Header';
import Footer from './components/Footer.js';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/community" component={Community} />
          <Route path="/resources" component={Resources} />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
