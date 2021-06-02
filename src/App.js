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

    <Container>
      <div>


      </div>
      <Header>
        <Menu secondary>
          <Menu.Item
            name='home'
          />
          <Menu.Item
            name='messages'
          />
          <Menu.Item
            name='friends'
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
    </Container>
  );
}

export default App;
