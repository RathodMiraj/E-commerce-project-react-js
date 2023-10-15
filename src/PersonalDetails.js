import React, { useEffect, useState } from 'react';
import "./Style/Personal.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import Layout from './Layout';
import QRCode from 'qrcode.react';

export default function PersonalDetails() {
    const [data, setData] = useState([]);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        getData()
    }, []);

    const getData = () => {
        const dataFromStorage = JSON.parse(localStorage.getItem('alldata'));
        const Login = JSON.parse(localStorage.getItem('LoginId'));

        const filteredData = dataFromStorage.filter((item) => item.CorUserid === Login);
        setData(filteredData);

    }

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };


    return (
        <>
            <Layout>
                {data.length > 0 &&
                    data.map((item, i) => (
                        <div style={{ paddingTop: 130 }} className="student-profile  " >
                            <div className="container ">
                                <h2 className='pb-2 ms-1'>User Profile</h2>
                                <div className="row">
                                    <div className="col-lg-5 mb-3">
                                        <div className="card shadow-sm ps-4 pe-4">
                                            <div className="card-body">
                                                <h5 className="mb-0 pt-2  pb-4">
                                                    <strong className="pr-1">Name : </strong> {item.name}
                                                </h5>
                                                <h5 className="mb-0 pt-2  pb-4">
                                                    <strong className="pr-1">User ID : </strong> {item.CorUserid}
                                                </h5>
                                                <h5 className="mb-0 pt-3 pb-4">
                                                    <strong className="pr-1">Email : </strong> {item.email}
                                                </h5>

                                                <h5 className="mb-0 pt-3 pb-4">
                                                    <strong className="pr-1">Contact Number : </strong>{item.contact}
                                                </h5>


                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 mb-4">
                                        <div className="card shadow-sm pt-2 pb-3 ps-4 pe-4">

                                            <div className="card-boy pt-3">
                                                <table className="table p-0 m-0">

                                                    <tr >
                                                        <th className='lp'><h5>Password</h5></th>
                                                        <td width="2%"><h5>:</h5></td>
                                                        <td className='p-0 m-0'>
                                                            <h5> <input
                                                                type={showPassword ? 'text' : 'password'}
                                                                id="passwordField"
                                                                value={item.pass}
                                                                readOnly
                                                                className='cvx'
                                                            />
                                                                <span
                                                                    id="togglePassword"
                                                                    className="toggle-password ccs"
                                                                    onClick={togglePassword}
                                                                >
                                                                    <i
                                                                        className={`bi ${showPassword ? 'bi-eye' : 'bi-eye-slash'
                                                                            }`}
                                                                        id="showPasswordIcon"
                                                                    ></i>
                                                                </span></h5>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className='lp'><h5>Gender</h5></th>
                                                        <td width="2%"><h5>:</h5></td>
                                                        <td ><h5>{item.gender}</h5></td>
                                                    </tr>
                                                    <tr>
                                                        <th className='lp'><h5>Address</h5></th>
                                                        <td width="2%"><h5>:</h5></td>
                                                        <td className='p-0 m-0'>
                                                            <h5>
                                                                {Array.isArray(item.Address) && item.Address.length > 0 ? (
                                                                    <>
                                                                        {item.Address.map((address,) => (
                                                                            <>
                                                                                <div >{address.address}</div>
                                                                            </>
                                                                        ))}
                                                                    </>
                                                                ) : (
                                                                    <p>No Address</p>
                                                                )}
                                                            </h5>
                                                        </td>
                                                    </tr>


                                                    <tr>
                                                        <th className='lp'><h5>PinCode</h5></th>
                                                        <td width="2%"><h5>:</h5></td>
                                                        <td className='p-0 m-0'>
                                                            <h5> {Array.isArray(item.Address) && item.Address.length > 0 ? (
                                                                <>
                                                                    {item.Address.map((address) => (
                                                                        <>
                                                                            <div >{address.pinCode}</div>
                                                                        </>
                                                                    ))}
                                                                </>
                                                            ) : (
                                                                <p>No Pin Code</p>
                                                            )}</h5>
                                                        </td>
                                                    </tr>

                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </Layout>
        </>

    );
}
