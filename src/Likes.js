import React from 'react';
import {
    Divider,
    Grid,
    Breadcrumb,
    Menu,
} from 'semantic-ui-react'
import LeftPanel from './LeftPanel';
import LikesPanel from './LikesPanel';
import { useSelector, useDispatch } from 'react-redux'
import { selectAllLikes, changeColumn } from './features/like/likeSlice';

function Likes() {

    const dispatch = useDispatch()
    const activePanel = useSelector(selectAllLikes)

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

                            active={activePanel.activeItem === 'meLiked'}
                            onClick={() => dispatch(changeColumn('meLiked'))}
                        />
                        <Menu.Item
                            name='Кого лайкнул я'
                            active={activePanel.activeItem === 'iLiked'}
                            onClick={() => dispatch(changeColumn('iLiked'))}
                        />
                        <Menu.Item
                            name='Взаимные лайки'
                            active={activePanel.activeItem === 'weLiked'}
                            onClick={() => dispatch(changeColumn('weLiked'))}
                        />

                    </Menu>

                    <LikesPanel />
                </Grid.Column>
            </Grid>
        </>
    )
}
export default Likes