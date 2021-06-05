import React, { useState, useEffect } from 'react';
import {
    Divider,
    Grid,
    Breadcrumb,
    Label,
    Icon
} from 'semantic-ui-react'
import LeftPanel from './LeftPanel';

function Friends() {
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
            <Label>
                <Icon name='home' />
            </Label>
            <Breadcrumb>
                <Breadcrumb.Section link>Homing</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section link>Frends</Breadcrumb.Section>
                <Breadcrumb.Divider />
            </Breadcrumb>
            <Divider hidden />
            <Grid>
                <Grid.Column width={4}>
                    <LeftPanel />
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
export default Friends