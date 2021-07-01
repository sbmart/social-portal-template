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
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        // dispatch(editProfile(data));
    };

    return (
        <>
            <PhotosEditable />
            <Form >
                <Form.Group widths={2}>
                    <Form.Input fluid label='E-mail' placeholder='Sbmart@ya.ru' readOnly />
                </Form.Group>

                <Form.Group widths={2}>
                    <Form.Input label='Имя' placeholder='Имя' />
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
        </>
    )
}

export default ProfileEditable;
