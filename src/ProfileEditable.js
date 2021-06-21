import React
    //, { useState, useEffect }
    from 'react';
import { Button, Divider, Form, TextArea, Select } from 'semantic-ui-react';
import PhotosEditable from './PhotosEditable';
import './input.css'
import { useForm } from "react-hook-form";
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
                    <Form.Select fluid label='День рождения' options={aimOptions} placeholder='День'  {...register("birthDateD")} />
                    <Form.Select fluid label='месяц' options={aimOptions} placeholder='Месяц'  {...register("birthDateM")} />
                    <Form.Select fluid label='год' options={aimOptions} placeholder='Год'  {...register("birthDateY")} />
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
                        <Select options={aimOptions} placeholder='-' />
                    </Form.Field>

                    <Form.Field inline>
                        <label>До</label>
                        <Select options={aimOptions} placeholder='--' />
                    </Form.Field>

                </Form.Group>

                {/* АДРЕС */}
                <Form.Group widths={2}>
                    <Form.Input label='Адрес' placeholder='Адрес' {...register("adress")} />
                </Form.Group>

                {/* О СЕБЕ */}
                <h4>О себе</h4>

                <TextArea style={{ width: 500 }} placeholder='Расскажите о себе' {...register("about")} />
                <Divider hidden />
                <Form.Checkbox label='Согласен с пользовательским соглашением и политикой обработки персональных данных' />
                <Button positive type='submit'>Сохранить</Button>
            </Form>
        </>
    )
}

export default ProfileEditable;
