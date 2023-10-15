import React from 'react';

const PageLoader = () => {

    // const changeorder = (e, tableMeta) => {
    //     let orderData = []
    //     let objIndex = data.findIndex((obj => obj.orderId == tableMeta.rowData[3]));
    //     data[objIndex].Status = e.target.value;

    //     localStorage.setItem('orderList', JSON.stringify(data));


    //     let usr = JSON.parse(localStorage.getItem('userdata'))

    //     for (let i = 0; i < usr.length; i++) {
    //         for (let j = 0; j < data.length; j++) {
    //             if (usr[i].id == tableMeta.rowData[2]) {
    //                 orderData = usr[i].order
    //             }
    //         }
    //     }

    //     for (let j = 0; j < orderData.length; j++) {
    //         if (orderData[j].orderId == tableMeta.rowData[3]) {
    //             orderData[j].Status = e.target.value
    //         }
    //     }


    //     for (let i = 0; i < usr.length; i++) {
    //         for (let j = 0; j < data.length; j++) {
    //             if (usr[i].id == tableMeta.rowData[2]) {
    //                 usr[i].order = orderData
    //             }
    //         }
    //     }

    //     localStorage.setItem('userdata', JSON.stringify(usr))

    // }

    return (
        <div className="page-loader">
            <div className="loader"></div>

        </div>
    );
};

export default PageLoader;
