import React from 'react';
import {
    Divider,
    Grid,
    Breadcrumb,
    Label,
    Icon
} from 'semantic-ui-react'
import LeftPanel from '../../LeftPanel';
import RightPanel from '../../RightPanel';

function Messages() {
    return (
        <>
            <Label>
                <Icon name='mail' />
            </Label>
            <Breadcrumb>
                <Breadcrumb.Section link>Homing</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section link>Messages</Breadcrumb.Section>
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
export default Messages