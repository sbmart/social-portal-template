import React from 'react';
import {
    Header,
    Menu,
    //Input
} from 'semantic-ui-react'
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Home'
import Messages from './features/message/Messages'
import Friends from './Friends'
import Profile from './features/profile/Profile'
import Likes from './features/like/Likes'
import Settings from './features/settings/Settings';


function Head() {
    return (
        <Header>
            <Menu secondary>
                <Menu.Item as={Link} to="/" name='home' />
                <Menu.Item as={Link} to="/messages" name='messages' />
                <Menu.Item as={Link} to="/friends" name='friends' />
                {/* <Menu.Item as={Link} to="/settins" name='settins' /> */}

                <Menu.Menu position='right'>
                    {/* <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item> */}
                    <Menu.Item name='logout' />
                </Menu.Menu>
            </Menu>
            <Switch>
                <Route path="/messages" children={<Messages />} />
                <Route path="/friends" children={<Friends />} />
                <Route path="/profile" children={<Profile />} />
                <Route path="/likes" children={<Likes />} />
                <Route path="/settings" children={<Settings />} />
                <Route exact path="/" children={<Home />} />

            </Switch>
        </Header>
    )
}
export default Head;