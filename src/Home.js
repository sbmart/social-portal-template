import React from 'react';
import {
    Divider,
    Grid,
    Breadcrumb,
} from 'semantic-ui-react'
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

function Home() {
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Section link>Homing</Breadcrumb.Section>
                <Breadcrumb.Divider />
            </Breadcrumb>
            <Divider hidden />
            <Grid>
                <Grid.Column width={4}>
                    <LeftPanel />
                </Grid.Column>
                <Grid.Column width={11}>
                    <RightPanel />
                </Grid.Column>
            </Grid>
        </>
    )
}
export default Home