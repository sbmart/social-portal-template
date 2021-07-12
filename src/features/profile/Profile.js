import React from 'react';
import {
    Divider,
    Grid,
    Breadcrumb,
} from 'semantic-ui-react'
import LeftPanel from '../../LeftPanel';
import ProfileEditable from './ProfileEditable';

function Profile() {
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
                    <ProfileEditable />
                </Grid.Column>
            </Grid>
        </>
    )
}
export default Profile