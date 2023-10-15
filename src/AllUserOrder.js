import React, { useEffect, useState } from 'react';
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import createCache from "@emotion/cache";
import MUIDataTable from 'mui-datatables';
import Layout from './Layout';
import './Style/App.css';

function AllOrderPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData()
    }, []);

    const getData = () => {
        let user = JSON.parse(localStorage.getItem('alldata'));
        let Login = localStorage.getItem('LoginId')

        let Maycart = []

        for (let i = 0; i < user.length; i++) {
            if (user[i].CorUserid == Login) {
                Maycart = user[i].MyOrder
                setData(Maycart)
            }
        }

    }

    const muiCache = createCache({
        key: 'mui-datatables',
        prepend: true
    })

    const handleCancel = (value) => {
        console.log(value)
    };


    const handleReturn = (rowIndex) => {
        // Get the order data for the selected row
        const selectedOrder = data[rowIndex];

        // Add your return logic here, e.g., make an API request to initiate a return

        // Update the status in the data (assuming 1 represents "Ready To Ship")
        const updatedData = [...data];
        updatedData[rowIndex].Status = 4; // Set the status to "Returned"

        setData(updatedData); // Update the state to reflect the change
    };


    const columns = [
        {
            name: 'OrderId',
            label: 'Order Id ',
            options: {
                filter: true,
                sort: false,
            },
        },

        {
            name: 'productChoice',
            label: 'Product Choice',
            options: {
                filter: true,
                sort: false,
            },
        },

        {
            name: 'productBrand',
            label: 'Product Brand',
            options: {
                filter: true,
                sort: false,
            },
        },

        {
            name: 'productPrice',
            label: 'Product Price',
            options: {
                filter: true,
                sort: false,
            },
        },
        {
            name: 'orderDate',
            label: 'Order Date',
            options: {
                filter: true,
                sort: false,

            },
        },

        {
            name: 'productImg',
            label: 'Product Img',
            options: {
                filter: true,
                sort: false,

                customBodyRender: (value, tableMeta, updateValue) => {
                    if (value && Array.isArray(value) && value.length > 0) {
                        return (
                            <img width={100} src={value[0]} alt="" />
                        );
                    } else {
                        return null;
                    }
                }
            },
        },

        {
            name: "Status",
            label: "Status",
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value, tableMeta, updateValue) => (
                    <>
                        {console.log(tableMeta)}
                        {value === 'ReadyToShip' ? (
                            <>
                                <h6 style={{ color: 'blue' }}>
                                    <b>
                                        <i className="bi bi-truck"></i> Ready To Ship
                                    </b>
                                </h6>

                            </>
                        ) : value === 'delivered' ? (
                            <>
                                <h6 style={{ color: 'green' }}>
                                    <b>
                                        <i className="bi bi-check-circle-fill"></i> Delivered
                                    </b>
                                    <button className='ms-3 btn btn-primary' onClick={() => handleReturn(tableMeta.rowIndex)}>
                                        Return
                                    </button>
                                </h6>
                            </>
                        ) : value === 'Shiped' ? (
                            <>
                                <h6 style={{ color: 'Purple' }}>
                                    <b>
                                        <i className="bi bi-check-circle-fill"></i> Shiped
                                    </b>
                                </h6>
                            </>
                        ) : (
                            <h6 style={{ color: 'red' }}>
                                <b>
                                    <i className="bi bi-hourglass-top"></i> Pending
                                </b>
                                <button className='ms-3 btn btn-primary' onClick={() => handleCancel(tableMeta.rowIndex[0])}>
                                    Cancel
                                </button>
                            </h6>
                        )}
                    </>
                ),
            },
        }

    ];

    return (
        <>
            <Layout>
                <div style={{ position: 'relative', top: 100, marginBottom: 90 }}>
                    <CacheProvider value={muiCache}>
                        <ThemeProvider theme={createTheme()}>
                            <MUIDataTable
                                title={"All User Order"}
                                data={data}
                                columns={columns}
                                className="custom-table"
                            />
                        </ThemeProvider>
                    </CacheProvider>
                </div>
            </Layout>
        </>
    );
}

export default AllOrderPage;
