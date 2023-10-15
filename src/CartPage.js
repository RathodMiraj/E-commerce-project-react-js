import React, { useEffect, useState } from 'react';
import './Style/Cart.css'
import Layout from './Layout';

const CartPage = () => {

    const [alldata, setData] = useState([])

    useEffect(() => {
        getData()
    }, []);

    const getData = () => {
        let user = JSON.parse(localStorage.getItem('alldata'));
        let product = JSON.parse(localStorage.getItem('product'));
        let Login = localStorage.getItem('LoginId')

        let useCart = []
        let Maycart = []

        for (let i = 0; i < user.length; i++) {
            if (user[i].CorUserid == Login) {
                Maycart = user[i].cart
            }
        }

        for (let i = 0; i < Maycart.length; i++) {
            for (let j = 0; j < product.length; j++) {
                if (Maycart[i] == product[j].id) {
                    useCart.push(product[j])
                    setData(useCart)

                }
            }
        }
    }


    const remove = (abc) => {
        let usr = JSON.parse(localStorage.getItem('alldata'))

        for (let i = 0; i < usr.length; i++) {
            if (usr[i].CorUserid == localStorage.getItem('LoginId')) {

                console.log(usr[i].cart)
                let filter = usr[i].cart.filter(obj => obj !== abc)

                usr[i].cart = filter

                setData(filter)
                localStorage.setItem('alldata', JSON.stringify(usr))

                getData()
            }
        }

    }

    return (
        <>
            <Layout>
                <div className='d-flex cart-position flex-wrap  align-items-center'>

                    {alldata.length > 0 ? (
                        alldata.map((Item) => (
                            <div className='cart-div pb-3  mb-4'>
                                {Array.isArray(Item.img) ? (
                                    Item.img.map((image) => (
                                        <img src={image} className='p-2 mb-3 cart-Image' key={image} />
                                    ))
                                ) : (
                                    <img src={Item.img} className='p-3' width={120} />
                                )}
                                <h6 className='pt-2'>Choice : {Item.choice}</h6>
                                <h6 className='pt-2'>Brand : {Item.brand}</h6>
                                <h6 className='pt-2'>Price : {Item.price}</h6>

                                <div style={{ width: 70, cursor: 'pointer ' }} className=' m-auto pt-3'>
                                    <div onClick={() => remove(Item.id)} className='p-2 rounded bg-secondary '>
                                        <i class="bi bi-trash3-fill text-light"></i>
                                    </div>
                                </div>

                            </div>
                        ))
                    ) : (
                        <div className=' m-auto' >
                            <h1 >No Product In Cart</h1>
                        </div>
                    )
                    }
                </div>

            </Layout>
        </>
    );
};

export default CartPage;

