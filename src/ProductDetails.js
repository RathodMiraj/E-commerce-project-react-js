import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
    const [Uid, setID] = useState('');
    const [alldata, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('product'));
        setData(data);

        // let asdf = JSON.parse(localStorage.getItem('id'));
        // setID(asdf);

        const currentURL = window.location.href;
        const urlParts = currentURL.split('/');
        const id = urlParts[urlParts.length - 1];

        console.log(id);
        setID(id);

    }, []);

    const remove = (value) => {
        const newPeople = alldata.filter((item) => item.id !== value);

        console.log(newPeople);

        localStorage.setItem('product', JSON.stringify(newPeople));

        setData([...newPeople]);
    }

    const edit = (id) => {
        console.log(id);
        localStorage.setItem("das", id);
        navigate('/admin');
    }

    const matchingProduct = alldata.find(product => product.id == Uid);

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {matchingProduct ? (
                    <div className='Product-details  m-3'>
                        <div>
                            {Array.isArray(matchingProduct.img) ? (
                                matchingProduct.img.map((image) => (
                                    <img src={image} className='p-3' width={120} key={image} />
                                ))
                            ) : (
                                <img src={matchingProduct.img} className='p-3' width={120} />
                            )}

                            <h5 className='pt-1'>ID : {matchingProduct.id}</h5>
                            <h5 className='pt-1'>choice : {matchingProduct.choice}</h5>
                            <h5 className='pt-1'>price : ₹{matchingProduct.price}</h5>
                            <h5 className='pt-1'>processor : {matchingProduct.pro}</h5>
                            <h5 className='pt-1'>brand : {matchingProduct.brand}</h5>
                            <h5 className='pt-1'>type : {matchingProduct.items}</h5>
                            <h5 className='pt-1'>processor : {matchingProduct.pro}</h5>
                            <h5 className='pt-1'>ram : {matchingProduct.ram}</h5>
                            <h5 className='pt-1'>ssd : {matchingProduct.ssd}</h5>
                            <h5 className='pt-1'>graphicscard : {matchingProduct.graphicscard}</h5>
                            <div className='mt-3'>
                                <button onClick={() => remove(matchingProduct.id)} className='removeBtn'>Remove</button>
                                <button onClick={() => edit(matchingProduct.id)} className='removeBtn'>Edit</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        {
                            navigate('/allProduct')
                        }
                    </>
                )}
            </div>
        </>
    );
};

export default ProductDetails;
