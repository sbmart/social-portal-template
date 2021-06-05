import React from 'react';
import {
    Divider,
    Header,
    Menu,
    Input
} from 'semantic-ui-react'
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Home'
import Messages from './Messages'
import Friends from './Friends'

function Head() {
    return (
        <Header>
            <Menu secondary>
                <Menu.Item
                    as={Link} to="/" name='home'
                />
                <Menu.Item
                    as={Link} to="/messages" name='messages'
                />
                <Menu.Item
                    as={Link} to="/friends" name='friends'
                />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                    <Menu.Item
                        name='logout'
                    />
                </Menu.Menu>
            </Menu>
            <Switch>
                <Route path="/messages" children={<Messages />} />
                <Route path="/friends" children={<Friends />} />
                <Route path="/" children={<Home />} />
            </Switch>
            <Divider hidden />
        </Header>
    )
}
export default Head;