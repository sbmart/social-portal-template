import React
    //, { useState, useEffect }
    from 'react';
import { Button, Form, TextArea, Header, Image, Message, Segment, Select, Grid, Container } from 'semantic-ui-react';
import './input.css'
const aimOptions = [
    { key: 'sport', value: 'sport', text: 'Занятия спортом' },
    { key: 'music', value: 'music', text: 'Занятия музыкой' },
    { key: 'paint', value: 'paint', text: 'Занятия живописью' },
]

function ProfileEditable() {
    // const [userData, setUserData] = useState([]);

    // const getData = () => {
    //     fetch('localAPI.json'
    //         , {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json'
    //             }
    //         }
    //     )
    //         .then(function (response) {
    //             return response.json();
    //         })
    //         .then(function (myJson) {
    //             console.log(myJson);
    //             setData(myJson)
    //         });
    // }
    // useEffect(() => {
    //     getData()
    // }, [])
    return (
        <>
            <Grid textAlign='left' style={{ height: '100vh' }} verticalAlign='top'>
                <Grid.Column style={{ maxWidth: 650 }}>
                    <Header as='h2' color='blue' textAlign='center'>
                        Log-in to your account
                    </Header>
                    <Form size='big'>
                        <Segment stacked>
                            <Form.Input icon='user' iconPosition='left' placeholder='E-mail address' />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                            />

                            <Button color='blue' fluid size='large'>
                                Login
          </Button>
                        </Segment>
                    </Form>
                    <Message>
                        New to us? <a href='#'>Sign Up</a>
                    </Message>
                </Grid.Column>
            </Grid>
        </>
    )
}

export default ProfileEditable;
