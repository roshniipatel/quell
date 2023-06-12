// app.js renamed to App.js because react error said it could not find it
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// Error was saying that Route was undefined so I installed this missing package
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
// import Community from './pages/Community';
// import Resources from './pages/Resources';
import Header from './components/Header';
import Footer from './components/Footer.js';
import Login from './pages/Login';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

// !Component modified to work with react routing
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              {/* <Route path="/community" element={<Community />} />
            <Route path="/resources" element={<Resources />} /> */}
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
