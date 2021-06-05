import React, { useState, useEffect } from 'react';

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
                data && data.length > 0 && data.map((item) => <p key={item._id}> {item.about}</p>)
            }
        </>
    )
}

export default RightPanel;