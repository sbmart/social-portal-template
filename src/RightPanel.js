import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Segment } from 'semantic-ui-react';

function RightPanel() {
    const [data, setData] = useState([]);
    const getData = () => {
        fetch('localAPI.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setData(myJson)
            });
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>

            {
                data && data.length > 0 && data.map((item) => <Segment key={item._id}> {item.about}</Segment>)
            }
        </>
    )
}

export default RightPanel;