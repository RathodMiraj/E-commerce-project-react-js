import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowProduct = () => {
    const [data, setData] = useState([]);
    const [showData, setShowData] = useState([]);

    useEffect(() => {
        axios.get('https://gorest.co.in/public/v2/users')
            .then((response) => {
                console.log(response.data);
                setData(response.data);
                setShowData(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const filterCode = (gender) => {
        const filteredByCategory = data.filter((item) => item.gender === gender);
        setShowData(filteredByCategory);
        console.log(showData);
    }

    return (
        <div>

            <button onClick={() => filterCode('male')}>male</button>
            <button onClick={() => filterCode('female')}>female</button>

            <table>
                <tr>
                    <th>name</th>
                    <th>email </th>
                    <th>gender</th>
                </tr>


                {showData.map((item) => {
                    return (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.gender}</td>
                        </tr>
                    )
                })

                }

            </table>
        </div>
    );
};

export default ShowProduct;
