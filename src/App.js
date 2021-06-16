import React from 'react';
import { Container } from 'semantic-ui-react'
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './app/store'

import Head from './Head'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Container>
          <Head />
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
