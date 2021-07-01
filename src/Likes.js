import React from 'react';
import {
    Divider,
    Grid,
    Breadcrumb,
} from 'semantic-ui-react'
import LeftPanel from './LeftPanel';
import Search from './Search';

function Likes() {
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Section link>Likes</Breadcrumb.Section>
                <Breadcrumb.Divider />
            </Breadcrumb>
            <Divider hidden />
            <Grid>
                <Grid.Column width={4}>
                    <LeftPanel />
                </Grid.Column>
                <Grid.Column width={12}>
                    <Search />
                </Grid.Column>
            </Grid>
        </>
    )
}
export default Likes