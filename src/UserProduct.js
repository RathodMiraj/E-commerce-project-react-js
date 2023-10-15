import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style/Index1.css';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import ReactImageMagnify from 'react-image-magnify';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const UserProduct = () => {
    const [Sid, setID] = useState('');

    const [Uid, setAdID] = useState('');

    const [alldata, setData] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();


    const [order, setOrder] = useState([]);

    const [showPopup, setShowPopup] = useState(false);

    const [address, setAddress] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [showAddToCartPopup, setShowAddToCartPopup] = useState(false);

    const showToastMessage = () => {
        toast.success(' Your Order Success !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const back = () => {
        navigate('/product')
    }
    const showToastMessages = () => {
        toast.success(' Your Address Added , Plaese Order Add !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };


    const notify = () => toast("Item added to cart!");
    const asdf = () => toast("This item is already in your cart.");
    const asdfs = () => toast("You have ordered this product once");

    let MayAddress = []


    useEffect(() => {

        let data = JSON.parse(localStorage.getItem('product'));
        setData(data);

        let user = JSON.parse(localStorage.getItem('alldata'));
        let Login = localStorage.getItem('LoginId')

        for (let i = 0; i < user.length; i++) {
            if (user[i].CorUserid == Login) {
                MayAddress = user[i].Address
                setAdID(MayAddress)
            }
        }

        if (localStorage.getItem('adminOrder')) {
            const userOrders = JSON.parse(localStorage.getItem('adminOrder'));
            if (userOrders) {
                setOrder(userOrders);
            }
        }

        const currentURL = window.location.href;
        const urlParts = currentURL.split('/');
        const id = urlParts[urlParts.length - 1];

        setID(id);
    }, []);

    const matchingProduct = alldata.find(product => product.id == Sid);

    useEffect(() => {
        if (matchingProduct?.img?.length > 0) {
            setSelectedImage(matchingProduct.img[0]);
        }
    }, [matchingProduct]);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const addToCart = (id) => {

        let registerData = JSON.parse(localStorage.getItem('alldata'));
        let usrId = registerData.findIndex(i => i.CorUserid == localStorage.getItem('LoginId'));

        if (usrId !== -1 && registerData[usrId].cart) {
            let Cart = false;

            for (let i = 0; i < registerData[usrId].cart.length; i++) {
                if (registerData[usrId].cart[i] == id) {
                    Cart = true;
                }
            }

            if (Cart) {
                asdf();
            } else {
                notify();
                registerData[usrId].cart.push(id);
                localStorage.setItem('alldata', JSON.stringify(registerData));
            }
        }
        else {
            alert('Please Login')
        }
    }

    const orderNow = (id, choice, brand, price, img) => {
        const loginID = localStorage.getItem('LoginId');
        if (!loginID) {
            navigate('/login');
            return;
        }

        let registerData = JSON.parse(localStorage.getItem('alldata')) || [];
        let usrId = registerData.findIndex((i) => i.CorUserid == loginID);


        if (usrId !== -1) {
            if (registerData[usrId].MyOrder && registerData[usrId].MyOrder.includes(id)) {
                asdfs();
            } else {
                if (!registerData[usrId].Address || registerData[usrId].Address.length === 0) {
                    setShowPopup(true);
                } else {
                    const orderData = {
                        UserId: loginID,
                        OrderId: Date.now(),
                        productChoice: choice,
                        productBrand: brand,
                        productPrice: img,
                        productImg: price,
                        orderDate: new Date().toISOString(),
                        Status: 'pending'
                    };

                    registerData[usrId].MyOrder = [...(registerData[usrId].MyOrder || []), orderData];
                    showToastMessage();
                    localStorage.setItem('alldata', JSON.stringify(registerData));

                    const userOrders = JSON.parse(localStorage.getItem('userOrders')) || [];
                    userOrders.push(orderData);
                    localStorage.setItem('userOrders', JSON.stringify(userOrders));
                }
            }

        } else {
            alert('User data not found');
        }

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        let registerData = JSON.parse(localStorage.getItem('alldata'));
        let usrId = registerData.findIndex(i => i.CorUserid == localStorage.getItem('LoginId'));

        const userData = {
            address,
            pinCode,
            contactNumber,
            id: Date.now()
        }

        registerData[usrId].Address.push(userData);
        localStorage.setItem('alldata', JSON.stringify(registerData));

        showToastMessages();

        setShowPopup(false);

    };

    const showAddToCart = () => {
        setShowAddToCartPopup(true);
    };

    const hideAddToCart = () => {
        setShowAddToCartPopup(false);
    };

    return (
        <>
            <Layout>
                <div className='product-ratinga product-div-top '>
                    {matchingProduct ? (
                        <div className='Product-details'>

                            <div>
                                <ReactImageMagnify
                                    smallImage={{
                                        alt: 'Wristwatch by Ted Baker London',
                                        isFluidWidth: true,
                                        src: selectedImage,
                                        isHoverActivated: false,

                                    }}
                                    largeImage={{
                                        src: selectedImage,
                                        width: 700,
                                        height: 800,

                                    }}
                                />
                                <div className='small-images p-3'>
                                    {matchingProduct.img.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            width={100}
                                            className='p-2'
                                            onClick={() => handleImageClick(image)}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div className='d-flex justify-content-end mb-4 '>
                                    <h5 style={{ cursor: 'pointer' }} onClick={back}> <b><i style={{ position: 'relative', top: 1, fontWeight: 'bold' }} class="bi bi-arrow-left" ></i></b> back</h5>
                                </div>
                                <h3 className='pt-1'>Type : {matchingProduct.items}</h3>

                                <h5 className='pt-1'>ID : {matchingProduct.id}</h5>
                                <h5 className='pt-1'>Choice : {matchingProduct.choice}</h5>
                                <h5 className='pt-1'>Price : ₹{matchingProduct.price}</h5>
                                <h5 className='pt-1'>Processor : {matchingProduct.pro}</h5>
                                <h5 className='pt-1'>Brand : {matchingProduct.brand}</h5>
                                <h5 className='pt-1'>Ram : {matchingProduct.ram}</h5>
                                <h5 className='pt-1'>SSD : {matchingProduct.ssd}</h5>
                                <h5 className='pt-1'>GraphDcscard : {matchingProduct.graphicscard}</h5>
                                <div className='pt-2'>
                                    <button className='btn btn-primary m-3' onClick={() => orderNow(matchingProduct.id, matchingProduct.choice, matchingProduct.brand, matchingProduct.img, matchingProduct.price, showToastMessage)}>Order Now</button>
                                    <button className='btn btn-primary m-3' onClick={showAddToCart}>Add to Cart</button>

                                    <ToastContainer />
                                </div>

                            </div>
                            <Popup open={showPopup} onClose={() => setShowPopup(false)}>
                                <div className='p-4'>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group pb-4">
                                            <label htmlFor="address">Address</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="address"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="form-group pb-4">
                                            <label htmlFor="pinCode">Pin Code</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="pinCode"
                                                value={pinCode}
                                                onChange={(e) => setPinCode(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="form-group pb-4">
                                            <label htmlFor="contactNumber">Contact Number</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="contactNumber"
                                                value={contactNumber}
                                                onChange={(e) => setContactNumber(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </Popup>

                            <Popup open={showAddToCartPopup} onClose={hideAddToCart}>
                                <div className='p-3 m-auto'>
                                    <div className='d-flex asdff flex-wrap align-items-center justify-content-center'>
                                        <div>
                                            <h3 className='pb-4 text-center d-flex align-items-center justify-content-center m-auto'>Product Added to Cart</h3>
                                            <h5 className='pt-2'>Id : {matchingProduct.id}</h5>
                                            <h5 className='pt-2'> choice :{matchingProduct.choice}</h5>
                                            <h5 className='pt-2'> brand : {matchingProduct.brand}</h5>
                                            <h5 className='pt-2'> price : ₹{matchingProduct.price}</h5>
                                            <button className='mt-4 text-center btn btn-primary  ' onClick={() => addToCart(matchingProduct.id, notify)}>AddToCart</button>
                                        </div>
                                        <div className='m-3'>
                                            <img className='dfdf' src={matchingProduct.img[0]} alt="" />
                                        </div>
                                    </div>

                                </div>
                            </Popup>
                        </div>
                    ) : (
                        <h1>No Product</h1>
                    )}
                </div>
            </Layout>
        </>
    );
};

export default UserProduct;
