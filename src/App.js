import React, { useState, useEffect } from 'react';
import './App.css';
import {
  Container,
  Grid,
  Header,
  Image,
  Menu,
  Input
} from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch('localAPI.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        // console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <Router>
      <Container>
        <div>


        </div>
        <Header>
          <Menu secondary>
            <Menu.Item
              as={Link} to="/" name='home'
            />
            <Menu.Item
              as={Link} to="/messages" name='messages'
            />
            <Menu.Item
              as={Link} to="/friends" name='friends'
            />
            <Menu.Menu position='right'>
              <Menu.Item>
                <Input icon='search' placeholder='Search...' />
              </Menu.Item>
              <Menu.Item
                name='logout'
              />
            </Menu.Menu>
          </Menu>
        </Header>
        <Grid>
          <Grid.Column width={4}>
            < Image src='./image.png' rounded />
          </Grid.Column>
          <Grid.Column width={12}>
            {
              data && data.length > 0 && data.map((item) => <p key={item._id}> {item.about}</p>)
            }
          </Grid.Column>
        </Grid>

        <Switch>
          <Route path="/messages">
            <Messages />
          </Route>
          <Route path="/friends">
            <Friends />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Container>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Messages() {
  return <h2>Messages</h2>;
}

function Friends() {
  return <h2>Friends</h2>;
}

export default App;
