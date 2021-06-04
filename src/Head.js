import React from 'react';
import {
    Header,
    Menu,
    Input
} from 'semantic-ui-react'

function Head() {
    return (
        <Header>
            <Menu secondary>
                <Menu.Item
                    name='home'
                />
                <Menu.Item
                    name='messages'
                />
                <Menu.Item
                    name='friends'
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
        </Header>
    )
}
export default Head;