import React from 'react';
import { Divider, Image, Label, List, Segment } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


function LeftPanel() {
    const like = useSelector((state) => state.like.value)
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

                        <List.Icon name='chat' >
                            {/* <Label color='red' circular size='mini' floating>4</Label>   */}
                        </List.Icon>


                        <List.Content>Мои сообщения
                            <Label color='red' circular size='mini' >{like}</Label>
                        </List.Content>
                    </List.Item>
                    <List.Item as={Link} to="/messages">
                        <List.Icon name='add user' />
                        <List.Content>Мои лайки
                            <Label color='red' circular size='mini' >3</Label>
                        </List.Content>
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