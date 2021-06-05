import React from 'react';
import { Container } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
} from "react-router-dom";

import Head from './Head'

function App() {
  return (
    <Router>
      <Container>
        <Head />
      </Container>
    </Router>
  );
}

export default App;
