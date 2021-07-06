import React from 'react';
import {
    Divider,
    Grid,
    Breadcrumb,
} from 'semantic-ui-react'
import LeftPanel from './LeftPanel';
import SettingsPanel from './SettingsPanel';

function Settings() {
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Section link>Profile</Breadcrumb.Section>
                <Breadcrumb.Divider />
            </Breadcrumb>
            <Divider hidden />
            <Grid>
                <Grid.Column width={4}>
                    <LeftPanel />
                </Grid.Column>
                <Grid.Column width={12}>
                    <SettingsPanel />
                </Grid.Column>
            </Grid>
        </>
    )
}
export default Settings