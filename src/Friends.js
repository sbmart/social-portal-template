import React from 'react';
import {
    Divider,
    Grid,
    Breadcrumb,
    Label,
    Icon
} from 'semantic-ui-react'
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

function Friends() {
    return (
        <>
            <Breadcrumb>
                <Label ><Icon name='home' /></Label>
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
                    <RightPanel />
                </Grid.Column>
            </Grid>
        </>
    )
}
export default Friends