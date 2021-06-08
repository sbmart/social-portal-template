import React
    //, { useState, useEffect }
    from 'react';
import { Form, TextArea, Header, Input, Segment, Select } from 'semantic-ui-react';

const style = {
    h1: {
        marginTop: '3em',
    },
    h2: {
        margin: '4em 0em 2em',
    },
    h3: {
        marginTop: '2em',
        padding: '2em 0em',
    },
    last: {
        marginBottom: '300px',
    },
}

const aimOptions = [
    { key: 'af', value: 'af', text: 'Занятия спортом' },
    { key: 'ax', value: 'ax', text: 'Занятия музыкой' },
    { key: 'al', value: 'al', text: 'Занятия живописью' },
]

function ProfileEditable() {
    // const [userData, setUserData] = useState([]);

    // const getData = () => {
    //     fetch('localAPI.json'
    //         , {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json'
    //             }
    //         }
    //     )
    //         .then(function (response) {
    //             return response.json();
    //         })
    //         .then(function (myJson) {
    //             console.log(myJson);
    //             setData(myJson)
    //         });
    // }
    // useEffect(() => {
    //     getData()
    // }, [])
    return (
        <Segment
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
        >
            <h1>ProfileEditable</h1>
            {/* {
                data && data.length > 0 && data.map((item) => <Segment key={item._id}> {item.about}</Segment>)
            } */}
            {/* <ProfilePictures /> */}
            <Form>
                <Header as='h3' content='Text Container' style={style.h3} textAlign='center' />
                <Input icon='mail' placeholder='e-mail' />
                <Input icon='mail' placeholder='Имя' />
                <Select placeholder='Цели' options={aimOptions} />
                <Input icon='mail' placeholder='Адрес' />
                <TextArea placeholder='Расскажите о себе' style={{ minHeight: 100 }} />
            </Form>

        </Segment>
    )
}

export default ProfileEditable;