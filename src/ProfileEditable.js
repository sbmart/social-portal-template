import './input.css'
import { dayOptions, monthOptions, yearOptions, aimOptions, elderOptions } from './selectOptions';
import React
    //, { useState, useEffect }
    from 'react';
import { Button, Divider, Form, TextArea, Select } from 'semantic-ui-react';
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
import { sleep } from './utils';

function ProfileEditable() {
    const dispatch = useDispatch()

    return (
        <>
            <PhotosEditable />
            <Formik
                initialValues={{
                    email: "1@1.ru",
                    firstName: "",
                    birthDateD: "",
                    birthDateM: "",
                    birthDateY: "",
                    aim: "",
                    ageFrom: 0,
                    ageTo: 0,
                    adress: "",
                    about: "",
                    acceptTerms: false
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
                        dispatch(editProfile(values));
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
                    <Form onSubmit={handleSubmit}>
                        <Form.Group widths={2}>
                            <Form.Input fluid label='E-mail' readOnly value={values.email} onChange={handleChange} />
                        </Form.Group>

                        {/* ИМЯ */}
                        <Form.Group widths={2}>
                            <Form.Input label='Имя' placeholder='Имя' value={values.firstName} onBlur={handleBlur}
                                onChange={handleChange} type="text" name="firstName"
                            />
                        </Form.Group>

                        {/* ДАТА РОЖДЕНИЯ */}
                        <Form.Group unstackable widths={5}>
                            <Form.Select fluid label='День рождения' options={dayOptions} placeholder='День' onChange={(e, { name, value }) => setFieldValue(name, value)}
                                value={values.birthDateD}
                                name="birthDateD" />
                            <Form.Select fluid label='месяц' options={monthOptions} placeholder='Месяц' onChange={(e, { name, value }) => setFieldValue(name, value)}
                                value={values.birthDateM}
                                name="birthDateM" />
                            <Form.Select fluid label='год' options={yearOptions} placeholder='Год' onChange={(e, { name, value }) => setFieldValue(name, value)}
                                value={values.birthDateY}
                                name="birthDateY" />
                        </Form.Group>

                        {/* ЦЕЛЬ ЗНАКОМСТВА */}
                        <Form.Group unstackable widths={3}>
                            <Form.Select fluid label='Цель знакомства'
                                options={aimOptions}
                                placeholder='Выберите'
                                onChange={(e, { name, value }) => setFieldValue(name, value)}
                                value={values.aim}
                                name="aim"
                            />
                        </Form.Group>

                        {/* ИЩУ ПАРТНЕРА ВОЗРАСТОМ */}
                        <h4>Ищу партнера возрастом</h4>
                        <Form.Group>
                            <Form.Field inline>
                                <label>От</label>
                                <Select
                                    selection
                                    options={elderOptions} placeholder='-'
                                    onChange={(e, { name, value }) => setFieldValue(name, value)}
                                    value={values.ageFrom}
                                    name="ageFrom"
                                />
                            </Form.Field>

                            <Form.Field inline>
                                <label>До</label>
                                <Select options={elderOptions} placeholder='--'
                                    selection
                                    onChange={(e, { name, value }) => setFieldValue(name, value)}
                                    value={values.ageTo}
                                    name="ageTo"
                                />
                            </Form.Field>

                        </Form.Group>

                        {/* АДРЕС */}
                        <Form.Group widths={2}>
                            <Form.Input label='Адрес' placeholder='Адрес' value={values.adress} onChange={handleChange} type="text" name="adress" />
                        </Form.Group>

                        {/* О СЕБЕ */}
                        <h4>О себе</h4>
                        <TextArea style={{ width: 500 }} placeholder='Расскажите о себе' value={values.about} onChange={handleChange} type="text" name="about" />
                        <Divider hidden />

                        {/* СОГЛАСНЫЙ */}
                        <Form.Checkbox label='Согласен с пользовательским соглашением и политикой обработки персональных данных'
                            checked={values.acceptTerms} onChange={() => setFieldValue('acceptTerms', !values.acceptTerms)}
                            type="checkbox" name="acceptTerms" />

                        <Button positive type='submit' disabled={isSubmitting || !values.acceptTerms} >Сохранить</Button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default ProfileEditable;
// onChange={(value) => setFieldValue('fruitName', value)}
// const handleSelect = (e, { name, value }) => setFieldValue(name, value);
