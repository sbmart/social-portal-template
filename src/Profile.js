import React from 'react';
import {
    Divider,
    Grid,
    Breadcrumb,
} from 'semantic-ui-react'
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

function Profile() {
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Section link>Profiling</Breadcrumb.Section>
                <Breadcrumb.Divider />
            </Breadcrumb>
            <Divider hidden />
            <Grid>
                <Grid.Column width={4}>
                    <LeftPanel />
                </Grid.Column>
                <Grid.Column width={12}>
                    <RightPanel />
                </Grid.Column>
            </Grid>
        </>
    )
}
export default Profile