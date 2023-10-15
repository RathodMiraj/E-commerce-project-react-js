import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import createCache from '@emotion/cache';
import MUIDataTable from 'mui-datatables';
import { Link } from 'react-router-dom';

export default function AllOrder() {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('userOrders')) {
            let alldata = JSON.parse(localStorage.getItem('userOrders'));
            setData(alldata);
        }

    }, []);

    const columns = [
        {
            name: 'OrderId',
            label: 'OrderId',
            options: {
                filter: true,
                sort: false,
            },
        },
        {
            name: 'UserId',
            label: 'UserId',
            options: {
                filter: true,
                sort: false,
            },
        },
        {
            name: 'productChoice',
            label: 'productChoice',
            options: {
                filter: true,
                sort: false,
            },
        },
        {
            name: 'productBrand',
            label: 'productBrand',
            options: {
                filter: true,
                sort: false,
            },
        },
        {
            name: 'productPrice',
            label: 'productPrice',
            options: {
                filter: true,
                sort: false,
            },
        },
        {
            name: 'orderDate',
            label: 'orderDate',
            options: {
                filter: true,
                sort: false,
            },
        },
        {
            name: 'productImg',
            label: 'productImg',
            options: {
                customBodyRender: (value, tableMeta, updateValue) => {
                    if (value && Array.isArray(value) && value.length > 0) {
                        return <img width={100} src={value[0]} alt="" />;
                    } else {
                        return null;
                    }
                },
            },
        },
        {
            name: 'Status',
            label: 'Status',
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value, tableMeta, updateValue) => (
                    <>

                        <select
                            onChange={(e) => HandelStatusChange(e, value, tableMeta)}
                            className='ps-3 pe-3 p-2 rounded-1'
                        >
                            <option >option</option>
                            <option selected={value == 'ReadyToShip'} value="ReadyToShip">ReadyToShip</option>
                            <option selected={value == 'Shiped'} value="Shiped">Shiped</option>
                            <option selected={value == 'delivered'} value="delivered">delivered</option>
                        </select>

                    </>
                )
            },
        }

    ];

    let alldata = [];

    if (localStorage.getItem('alldata')) {
        alldata = JSON.parse(localStorage.getItem('alldata'));
    }

    const HandelStatusChange = (e, value, tableMeta) => {

        console.log(tableMeta.rowData[0]);

        const objIndex = data.findIndex((obj) => obj.OrderId === tableMeta.rowData[0]);
        data[objIndex].Status = e.target.value;
        localStorage.setItem('userOrders', JSON.stringify(data));

        let orderData = []

        let usr = JSON.parse(localStorage.getItem('alldata'))

        for (let i = 0; i < usr.length; i++) {
            for (let j = 0; j < data.length; j++) {
                if (usr[i].CorUserid == tableMeta.rowData[1]) {
                    console.log(usr[i].CorUserid == tableMeta.rowData[1])
                    orderData = usr[i].MyOrder
                }
            }
        }

        for (let j = 0; j < orderData.length; j++) {
            if (orderData[j].OrderId == tableMeta.rowData[0]) {
                orderData[j].Status = e.target.value
            }
        }

        for (let i = 0; i < usr.length; i++) {
            for (let j = 0; j < data.length; j++) {
                if (usr[i].CorUserid == tableMeta.rowData[1]) {
                    usr[i].MyOrder = orderData
                }
            }
        }

        localStorage.setItem('alldata', JSON.stringify(usr))
    }


    const muiCache = createCache({
        key: 'mui-datatables',
        prepend: true,
    });

    const options = {
        filterType: 'checkbox',
        print: false,
        sort: false,
    };

    return (
        <>
            <div>
                <div style={{ backgroundColor: '#1A1E25' }} className="sidenav ">
                    <div style={{ position: 'relative', left: 5 }} className='bg-image mt-2'></div>
                    <Link className='ms-2' to={'/admin'}>
                        <i class="bi bi-house-add-fill me-3"></i>
                        Add Product
                    </Link>
                    <Link className='ms-2' to={'/allProduct'}>
                        <i class="bi bi-clipboard-data  me-3"></i>
                        All Product
                    </Link>
                    <Link className='ms-2' to={'/adminOrder'}>
                        <i class="bi bi-bag-check-fill me-3"></i>
                        Order Page
                    </Link>
                    <Link className='ms-2' to={'/index'}>
                        <i class="bi bi-browser-chrome me-3"></i>
                        Web Page
                    </Link>

                </div>
                <div className='mainsss mt-4 lplp'>
                    <CacheProvider value={muiCache}>
                        <ThemeProvider theme={createTheme()}>
                            <MUIDataTable
                                title={'Admin Show Order'}
                                data={data}
                                columns={columns}
                                options={options}
                                className="custom-table"
                            />
                        </ThemeProvider>
                    </CacheProvider>
                </div>
            </div>
        </>
    );
}
