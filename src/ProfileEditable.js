import './input.css'
import React
    //, { useState, useEffect }
    from 'react';
import { Button, Checkbox, Divider, Form, TextArea, Select } from 'semantic-ui-react';
import PhotosEditable from './PhotosEditable';
import {
    useForm,
    // Controller 
} from "react-hook-form";
import {
    // useSelector,
    useDispatch
} from 'react-redux'
import {
    editProfile,
    // selectProfile 
} from './features/profile/profileSlice'

const aimOptions = [
    // { key: 'none', value: 'none', text: 'ушли' },
    { key: 'sport', value: 'sport', text: 'Занятия спортом' },
    { key: 'music', value: 'music', text: 'Занятия музыкой' },
    { key: 'paint', value: 'paint', text: 'Занятия живописью' },
]
const dayOptions = [
    { key: '1', text: '1', value: '1' },
    { key: '2', text: '2', value: '2' },
    { key: '3', text: '3', value: '3' },
    { key: '4', text: '4', value: '4' },
    { key: '5', text: '5', value: '5' },
    { key: '6', text: '6', value: '6' },
    { key: '7', text: '7', value: '7' },
    { key: '8', text: '8', value: '8' },
    { key: '9', text: '9', value: '9' },
    { key: '10', text: '10', value: '10' },
    { key: '11', text: '11', value: '11' },
]
const monthOptions = [
    { key: 'январь', text: 'январь', value: 'январь' },
    { key: 'февраль', text: 'февраль', value: 'февраль' },
    { key: 'март', text: 'март', value: 'март' },
    { key: 'апрель', text: 'апрель', value: 'апрель' },
    { key: 'май', text: 'май', value: 'май' },
    { key: 'июнь', text: 'июнь', value: 'июнь' },
]
const yearOptions = [
    { key: '1999', text: '1999', value: '1999' },
    { key: '2000', text: '2000', value: '2000' },
    { key: '2001', text: '2001', value: '2001' },
    { key: '2002', text: '2002', value: '2002' },
    { key: '2003', text: '2003', value: '2003' },
    { key: '2004', text: '2004', value: '2004' },
]
const elderOptions = [
    { key: '19', text: '19', value: '19' },
    { key: '20', text: '20', value: '20' },
]
const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
]

function ProfileEditable() {
    // const state = useSelector(selectProfile)
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        // alert(JSON.stringify(data));
        dispatch(editProfile(data));
    };

    return (
        <>
            <PhotosEditable />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group widths={2}>
                    <Form.Input fluid label='E-mail' placeholder='Sbmart@ya.ru' readOnly {...register("email")} />
                </Form.Group>

                <Form.Group widths={2}>
                    <Form.Input label='Имя' placeholder='Имя' {...register("firstName")} />
                </Form.Group>

                {/* ДАТА РОЖДЕНИЯ */}
                <Form.Group unstackable widths={5}>
                    <Form.Select fluid label='День рождения' options={dayOptions} placeholder='День'  {...register("birthDateD")} />
                    <Form.Select fluid label='месяц' options={monthOptions} placeholder='Месяц'  {...register("birthDateM")} />
                    <Form.Select fluid label='год' options={yearOptions} placeholder='Год'  {...register("birthDateY")} />
                </Form.Group>

                <Form.Group widths='equal'>
                    <Form.Input fluid label='First name' placeholder='First name' />
                    <Form.Input fluid label='Last name' placeholder='Last name' />
                    <Form.Select
                        fluid
                        label='Gender'
                        options={options}
                        placeholder='Gender'
                    />
                </Form.Group>

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
                    <Form.Input label='Адрес' placeholder='Адрес' {...register("adress")} defaultValue="" />
                </Form.Group>

                {/* О СЕБЕ */}
                <h4>О себе</h4>

                <TextArea style={{ width: 500 }} placeholder='Расскажите о себе' {...register("about")} defaultValue="" />
                <Divider hidden />
                {/* <Form.Checkbox label='Согласен с пользовательским соглашением и политикой обработки персональных данных'
                    {...register("agreed")} value="checked" /> */}
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' {...register("agreed")} value="checked" />
                </Form.Field>
                <Button positive type='submit'>Сохранить</Button>
            </Form>
        </>
    )
}

export default ProfileEditable;
