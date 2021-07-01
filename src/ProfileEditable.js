import './input.css'
import { dayOptions, monthOptions, yearOptions, aimOptions, elderOptions } from './selectOptions';
import React
    //, { useState, useEffect }
    from 'react';
import { Button, Checkbox, Divider, Form, TextArea, Select } from 'semantic-ui-react';
import PhotosEditable from './PhotosEditable';
import { Formik } from 'formik';
import {
    // useSelector,
    useDispatch
} from 'react-redux'
import {
    editProfile,
    // selectProfile 
} from './features/profile/profileSlice'

function ProfileEditable() {
    const dispatch = useDispatch()
    // const onSubmit = (data) => {
    //     alert(JSON.stringify(data));
    // dispatch(editProfile(data));
    // };

    return (
        <>
            <PhotosEditable />
            <Formik
                initialValues={{ email: '1@2.com', name: '' }}
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
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
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
                    /* and other goodies */
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group widths={2}>
                            <Form.Input fluid label='E-mail' readOnly value={values.email} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group widths={2}>
                            <Form.Input label='Имя' placeholder='Имя' value={values.name} onChange={handleChange} type="text" name="name" />
                        </Form.Group>

                        {/* ДАТА РОЖДЕНИЯ */}
                        <Form.Group unstackable widths={5}>
                            <Form.Select fluid label='День рождения' options={dayOptions} placeholder='День' />
                            <Form.Select fluid label='месяц' options={monthOptions} placeholder='Месяц' />
                            <Form.Select fluid label='год' options={yearOptions} placeholder='Год' />
                        </Form.Group>

                        {/* <Form.Group widths='equal'>
                    <Form.Input fluid label='First name' placeholder='First name' />
                    <Form.Input fluid label='Last name' placeholder='Last name' />
                    <Form.Select
                        fluid
                        label='Gender'
                        options={options}
                        placeholder='Gender'
                    />
                </Form.Group> */}

                        {/* ЦЕЛЬ ЗНАКОМСТВА */}
                        <Form.Group unstackable widths={3}>
                            <Form.Select fluid label='Цель знакомства' options={aimOptions} placeholder='Выберите' />
                        </Form.Group>


                        {/* ИЩУ ПАРТНЕРА ВОЗРАСТОМ */}
                        <h4>Ищу партнера возрастом</h4>
                        <Form.Group>
                            <Form.Field inline>
                                <label>От</label>
                                <Select options={elderOptions} placeholder='-' />
                            </Form.Field>

                            <Form.Field inline>
                                <label>До</label>
                                <Select options={elderOptions} placeholder='--' />
                            </Form.Field>

                        </Form.Group>

                        {/* АДРЕС */}
                        <Form.Group widths={2}>
                            <Form.Input label='Адрес' placeholder='Адрес' defaultValue="" />
                        </Form.Group>

                        {/* О СЕБЕ */}
                        <h4>О себе</h4>

                        <TextArea style={{ width: 500 }} placeholder='Расскажите о себе' defaultValue="" />
                        <Divider hidden />
                        <Form.Checkbox label='Согласен с пользовательским соглашением и политикой обработки персональных данных'
                            value="checked" />
                        {/* <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions'  value="checked" />
                </Form.Field> */}
                        <Button positive type='submit'>Сохранить</Button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default ProfileEditable;
