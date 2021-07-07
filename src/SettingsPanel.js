import './input.css'
import React from 'react';
import { Button, Divider, Form, Header, Icon, Modal } from 'semantic-ui-react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux'
import { editSettings, toggleDeletionModal, selectModalOpen } from './features/settings/settingsSlice'
//import { sleep } from './utils';

function Settings() {
    const [open, setOpen] = React.useState(false)
    // const open = useSelector(selectModalOpen);
    const dispatch = useDispatch();

    return (
        <>
            {console.log("modal opened " + open)}
            <Header as='h2' icon textAlign='center'>
                <Icon name='settings' circular />
                <Header.Content>Настройка аккаунта</Header.Content>
            </Header>
            <Formik
                initialValues={{
                    oldPassword: "",
                    newPassword: "",
                    confirmPassword: "",
                    recievePushNotifications: false,
                    recieveMailNotifications: false,
                    openDeletionModal: false,
                }}
                // validate={values => {
                //     const errors = {};
                //     if (!values.email) {
                //         errors.email = 'Required';
                //     } else if (
                //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                //     ) {
                //         errors.email = 'Invalid email address';
                //     }
                //     return errors;
                // }}

                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        dispatch(editSettings(values));
                        setSubmitting(false);
                        // todo , optout timeout from here
                    }, 400);
                }}


            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    setFieldValue,
                    /* and other goodies */
                }) => (
                    <>
                        {/* ПАРОЛЬ */}
                        <Form onSubmit={handleSubmit}>
                            <Form.Input label='Старый пароль' placeholder='Старый пароль' value={values.oldPassword} onChange={handleChange} onBlur={handleBlur} type="text" name="oldPassword" />
                            <Form.Input label='Новый пароль' placeholder='Новый пароль' value={values.newPassword} onChange={handleChange} type="text" name="newPassword" />
                            <Form.Input label='Подтверждение пароля' placeholder='Подтверждение пароля' value={values.confirmPassword} onChange={handleChange} type="text" name="confirmPassword" />
                            <Button positive type='submit' disabled={isSubmitting} >Сохранить</Button>
                        </Form>
                        <Divider hidden />

                        {/* PUSH */}
                        <Form onSubmit={handleSubmit}>
                            <Form.Checkbox label='Согласен получать PUSH'
                                checked={values.recievePushNotifications} onChange={() => setFieldValue('recievePushNotifications', !values.recievePushNotifications)}
                                type="checkbox" name="recievePushNotifications" />

                            <Form.Checkbox label='Согласен получать MAIL'
                                checked={values.recieveMailNotifications} onChange={() => setFieldValue('recieveMailNotifications', !values.recieveMailNotifications)}
                                type="checkbox" name="recieveMailNotifications" />

                            <Button positive type='submit' disabled={isSubmitting} >Сохранить</Button>
                        </Form>
                        {/* <Form onSubmit={handleSubmit}> */}
                        {/* <Button positive type='submit' >Delete</Button> */}
                        <Divider hidden />

                        {/* </Form> */}


                    </>
                )}
            </Formik>
            <Modal
                dimmer='blurring'
                onOpen={() => setOpen(true)}
                onClose={() => dispatch(toggleDeletionModal())}
                open={open}
                trigger={<Button color='orange' basic
                    // onClick={() => dispatch('settings/toggleDeletionModal')}
                    // onClick={() => dispatch(toggleDeletionModal())}
                    onClick={() => setOpen(false)}
                >Удалить аккаунт</Button>}
            >
                {/* <Modal.Header>Вы уверены?</Modal.Header> */}
                <Header icon='user delete' content='Вы собираетесь удалить свой аккаунт и все сообщения, уверены?' />
                <Modal.Content>
                    Здесь душещипательная тирада о вреде удаления Эккаунта
                </Modal.Content>
                <Modal.Actions>
                    <Button positive
                        onClick={() => {
                            console.log("delete canseled")
                            setOpen(false)
                        }}
                    >
                        Не удалять
                    </Button>
                    <Button negative
                        // onClick={() => dispatch(toggleDeletionModal())} // TODO: selectModalOpen is not selected from slice HMMM...
                        onClick={() => {
                            console.log("delete CONFIRMED!")
                            setOpen(false)
                        }}
                    >
                        Удалить
                    </Button>
                </Modal.Actions>
            </Modal>
        </>
    )
}

export default Settings;
