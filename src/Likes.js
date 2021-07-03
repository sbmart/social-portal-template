import React from 'react';
import {
    Divider,
    Grid,
    Breadcrumb,
    Menu,
} from 'semantic-ui-react'
import LeftPanel from './LeftPanel';
import LikesSkeleton from './LikesSkeleton';
import LikesPanel from './LikesPanel';

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

                    <Menu pointing secondary>
                        <Menu.Item
                            name='Кто лайкнул меня'

                        // active={activeItem === 'home'}
                        // onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Кого лайкнул я'
                            active={true}
                        // active={activeItem === 'messages'}
                        // onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Взаимные лайки'
                        // active={activeItem === 'friends'}
                        // onClick={this.handleItemClick}
                        />

                    </Menu>

                    <LikesPanel />
                </Grid.Column>
            </Grid>
        </>
    )
}
export default Likes