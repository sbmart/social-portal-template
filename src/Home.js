import React, { useState, useEffect } from 'react';
import {
    Grid,
    Label,
    Breadcrumb,
    Image
} from 'semantic-ui-react'

function Home() {
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
        <>
            <Breadcrumb>
                <Breadcrumb.Section link>Homing</Breadcrumb.Section>
                <Breadcrumb.Divider />

            </Breadcrumb>


            <Label as='a' color='yellow' image>
                <img src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
      Christian
      <Label.Detail>Co-worker</Label.Detail>
            </Label>
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
        </>
    )
}
export default Home