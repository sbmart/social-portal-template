import './input.css'
import React
    //, { useState, useEffect }
    from 'react';
import {
    Button,
    Checkbox,
    Divider, Form, TextArea, Select
} from 'semantic-ui-react';
import {
    useForm,
    Controller
} from "react-hook-form";
import {
    // useSelector,
    useDispatch
} from 'react-redux'
import {
    editProfile,
    // selectProfile 
} from './features/profile/profileSlice'
import { dayOptions, monthOptions, yearOptions, aimOptions, elderOptions } from './selectOptions';
// const { dayOptions, monthOptions, yearOptions, aimOptions, elderOptions } = selectOptions();

function TechnoMock() {
    // const state = useSelector(selectProfile)
    const dispatch = useDispatch()
    const { control, register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        // alert(JSON.stringify(data));
        dispatch(editProfile(data));
    };

    return (
        <>
            {/* <PhotosEditable /> */}
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
                    <Form.Input label='Адрес' placeholder='Адрес' {...register("adress")} defaultValue="" />
                </Form.Group>

                {/* О СЕБЕ */}
                <h4>О себе</h4>

                <TextArea style={{ width: 500 }} placeholder='Расскажите о себе' {...register("about")} defaultValue="" />
                <Divider hidden />


                {/* <Form.Checkbox label='Согласен с пользовательским соглашением и политикой обработки персональных данных'
                    {...register("agreed")} value="checked" /> */}


                <Controller
                    name="MyCheckbox"
                    control={control}
                    defaultValue={false}
                    rules={{ required: true }}
                    render={props =>
                        <Checkbox
                            onChange={e => props.onChange(e.target.checked)}
                            checked={props.value}
                        />
                    } // props contains: onChange, onBlur and value
                />

                {/* <Controller
                    render={
                        ({ field }) => <Select {...field}>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                        </Select>
                    }
                    control={control}
                    name="select"
                    defaultValue={10}
                /> */}

                {/* <Controller
                    name="iceCreamType"
                    as={Select}
                    options={[
                        { value: "chocolate", label: "Chocolate" },
                        { value: "strawberry", label: "Strawberry" },
                        { value: "vanilla", label: "Vanilla" }
                    ]}
                    control={control}
                    defaultValue=""
                /> */}



                <Button positive type='submit'>Сохранить</Button>
            </Form>
        </>
    )
}

export default TechnoMock;
