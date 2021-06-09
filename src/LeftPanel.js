import React from 'react';
import { Divider, Image, List, Segment } from 'semantic-ui-react';
import { Link } from "react-router-dom";

function LeftPanel() {
    return (
        <>
            <Segment style={{ minWidth: 200 }} >
                <Image src='./image.png' rounded />
                <Divider hidden />

                <List size='big'>
                    <List.Item as={Link} to="/profile">
                        <List.Icon name='edit' />
                        <List.Content>Анкета</List.Content>
                    </List.Item>
                    <List.Item as={Link} to="/messages">
                        <List.Icon name='chat' />
                        <List.Content>Мои сообщения</List.Content>
                    </List.Item>
                    <List.Item as={Link} to="/messages">
                        <List.Icon name='add user' />
                        <List.Content>Мои лайки</List.Content>
                    </List.Item>
                    <List.Item as={Link} to="/messages">
                        <List.Icon name='setting' />
                        <List.Content>Настройки аккаунта</List.Content>
                    </List.Item>
                    <List.Item as={Link} to="/messages">
                        <List.Icon name='hand peace' />
                        <List.Content>Приветствие</List.Content>
                    </List.Item>
                </List>
            </Segment>
        </>
    )
}

export default LeftPanel;