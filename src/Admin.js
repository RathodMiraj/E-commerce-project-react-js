import React from 'react';
import { useState } from 'react';
import './Style/Admin.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { format } from 'date-fns';
import imae from "./Image/asdf.jpg"
import ToggleTheme from './TogglePage';

const Admin = () => {

    const [image, setImage] = useState([])
    const [imagePreviews, setImagePreviews] = useState([]);

    const [choice, SetChoice] = useState('')
    const [brand, SetBrand] = useState('')
    const [type, SetType] = useState('')
    const [processor, SetProcessor] = useState('')
    const [ram, SetRAM] = useState('')
    const [ssd, SetSSD] = useState('')
    const [price, SetPrice] = useState('')
    const [graphicscard, SetGraphicscard] = useState('')
    const [alldata, setData] = useState([])
    const [Uid, setIDS] = useState('')

    useEffect(() => {
        let data = []
        if (localStorage.getItem('product')) {
            data = JSON.parse(localStorage.getItem('product'))
            setData(data)
        }
        if (localStorage.getItem('das')) {
            Edit(data);
        }
    }, [])

    const showitem = () => {

        const currentDate = new Date();
        const formattedDate = format(currentDate, "yyyy-MM-dd HH:mm:ss");

        let product = {
            choice: choice,
            brand: brand,
            items: type,
            pro: processor,
            ram: ram,
            ssd: ssd,
            price: price,
            graphicscard: graphicscard,
            img: image,
            id: Date.now(),
            DateTime: formattedDate,
        };

        let all = false;
        for (let i = 0; i < alldata.length; i++) {
            if (alldata[i].items == type) {
                all = true;
            }
        }

        if (choice == '') {
            toast.error('Please Enter Product Details');
        }

        else {
            if (brand == '') {
                alert('Please Select Brand')
            } else {
                if (choice == '') {
                    alert('Please Select choice')
                } else {
                    if (type == '') {
                        alert('Please Enter Name')
                    } else {
                        if (price == '') {
                            alert('Please Select choice')
                        } else {
                            if (all) {
                                alert("already register");
                            } else {
                                let newData = [...alldata, product]
                                setData(alldata?.length ? newData : [{ ...product }])
                                localStorage.setItem("product", JSON.stringify(newData));
                            }
                        }
                    }
                }
            }
        }

        SetChoice('')
        SetBrand('')
        SetType('')
        SetRAM('')
        SetProcessor('')
        SetPrice('')
        SetSSD('')
        SetGraphicscard('')
        setImage('')
        document.getElementById('imageInput').value = ''

    }

    const handleImageSelect = (event) => {
        const selectedImages = event.target.files;

        for (let i = 0; i < selectedImages.length; i++) {
            getBase64(selectedImages[i]);
        }
    };

    const getBase64 = (file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const base64Data = reader.result;
            setImage(prevImages => [...prevImages, base64Data]);
            setImagePreviews(prevPreviews => [...prevPreviews, base64Data]);
        };
    };

    const RemoveImage = (i) => {
        setImage(image.filter(row => row !== i));
        console.log(image);

    }

    const Edit = (data) => {
        // let alldata = JSON.parse(localStorage.getItem('alldata'));
        let aa = localStorage.getItem('das');

        for (let i = 0; i < data.length; i++) {
            if (data[i].id == aa) {

                SetChoice(data[i].choice);
                SetBrand(data[i].brand);
                SetType(data[i].items);
                SetProcessor(data[i].pro);
                SetRAM(data[i].ram);
                SetSSD(data[i].ssd);
                SetPrice(data[i].price);
                SetGraphicscard(data[i].graphicscard);
                setImage(data[i].img);
                setIDS(data[i].id);

            }
        }
    };

    // const dasdas = () => {
    //     window.location.href = '/index'
    // }

    const Updet = () => {
        let alldata = JSON.parse(localStorage.getItem('product'));

        const objIndex = alldata.findIndex((obj) => obj.id == Uid);
        alldata[objIndex].choice = choice;
        alldata[objIndex].brand = brand;
        alldata[objIndex].pro = processor;
        alldata[objIndex].items = type;
        alldata[objIndex].ram = ram;
        alldata[objIndex].price = price;
        alldata[objIndex].ssd = ssd;
        alldata[objIndex].graphicscard = graphicscard;
        alldata[objIndex].img = image;
        setData([...alldata]);
        localStorage.removeItem('das');
        localStorage.setItem('product', JSON.stringify(alldata));


        SetChoice('')
        SetBrand('')
        SetType('')
        SetRAM('')
        SetProcessor('')
        SetPrice('')
        SetSSD('')
        SetGraphicscard('')
        setImage('')
        document.getElementById('imageInput').value = '';
    };


    const Sub = () => {
        if (localStorage.getItem('das')) {
            Updet();
        } else {
            showitem();
        }
    };

    let expand = 'sm';

    return (
        <>
            <ToastContainer />
            <ToggleTheme />
            <Navbar key={expand} expand={expand} className="asdf pt-3 pb-3 mb-3">
                <Container fluid>
                    <Navbar.Brand href="#"> </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        style={{ backgroundColor: '#1A1E25' }}
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                        className='pt-3'
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                <img width={130} src={imae} alt="" />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <div className="offcanvas-body ms-2">
                            <ul className="navbar-nav justify-content-end  flex-grow-1 pe-3">
                                <li className="nav-item adsdasdasda sidenavs mt-2">
                                    <Link className='asd' to={'/admin'}>
                                        Add Product
                                    </Link>
                                </li>
                                <li class="nav-item adsdasdasda mt-2">
                                    <Link className='asd' to={'/allProduct'}>
                                        All Product
                                    </Link>
                                </li>
                                <li class="nav-item adsdasdasda mt-2">
                                    <Link className='asd' to={'/adminOrder'}>
                                        Order Page
                                    </Link>
                                </li>
                                <li class="nav-item adsdasdasda mt-2">
                                    <Link className='asd' to={'/index'}>
                                        WebPage
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>



            <div style={{ backgroundColor: '#1A1E25' }} className="sidenav ">
                <div style={{ position: 'relative', left: 5 }} className='bg-image mt-2 '></div>
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

            <div className='mainss'>

                <div className="col-md-11 col-lg-11 m-md-auto ">

                    <div className='d-flex mt-div mb-4 '>
                        <div className="form-group w-50">
                            <label for="exampleInputEmail1  " style={{ fontWeight: 'bolder' }}>TYPE</label>
                            <select name="" id="choices" onChange={(e) => SetChoice(e.target.value)} value={choice} class="form-control mt-2">
                                <option value="">Choice...</option>
                                <option value="COMPUTER">COMPUTER</option>
                                <option value="LAPTOP">LAPTOP</option>
                            </select>
                        </div><br />
                        <div class="form-group w-50 ms-4">
                            <label for="exampleInputPassword1" style={{ fontWeight: 'bolder' }}>BRAND</label>
                            <select name="" id="brand" onChange={(e) => SetBrand(e.target.value)} value={brand} class="form-control mt-2">
                                <option value="">Choice...</option>
                                <option value="HP">HP</option>
                                <option value="DELL">DELL</option>
                                <option value="SAMSUNG">SAMSUNG</option>
                                <option value="LENOVO">LENOVO</option>
                            </select>
                        </div><br />
                    </div>
                    <div className='d-flex mb-4'>
                        <div className="form-group w-50">
                            <label for="exampleInputPassword1" style={{ fontWeight: 'bolder' }}>NAME</label>
                            <input type="text" onChange={(e) => SetType(e.target.value)} value={type} class="form-control mt-2" id="pname" placeholder="NAME" />
                        </div>   <br />
                        <div className="form-group w-50 ms-4">
                            <label for="exampleInputPassword1" style={{ fontWeight: 'bolder' }}>PROCESSOR</label>
                            <input type="text" class="form-control mt-2" onChange={(e) => SetProcessor(e.target.value)} value={processor} id="processor" placeholder="PROCESSOR" />
                        </div> <br />
                    </div>
                    <div className='d-flex mb-4 '>
                        <div className="form-group w-50">
                            <label for="exampleInputPassword1" style={{ fontWeight: 'bolder' }}>RAM</label>
                            <input type="text" class="form-control mt-2" onChange={(e) => SetRAM(e.target.value)} value={ram} id="ram" placeholder="RAM" />
                        </div> <br />
                        <div className="form-group w-50 ms-4">
                            <label for="exampleInputPassword1" style={{ fontWeight: 'bolder' }}>SSD</label>
                            <input type="text" class="form-control mt-2" onChange={(e) => SetSSD(e.target.value)} value={ssd} id="ssd" placeholder="SSD" />
                        </div> <br />
                    </div>
                    <div className='d-flex mb-4'>
                        <div className="form-group w-50">
                            <label for="exampleInputPassword1" style={{ fontWeight: 'bolder' }}>PRICE</label>
                            <input type="number" class="form-control mt-2" onChange={(e) => SetPrice(e.target.value)} value={price} id="price" placeholder="price" />
                        </div><br />
                        <div class="form-group w-50 ms-4">
                            <label for="exampleInputPassword1" style={{ fontWeight: 'bolder' }}>GRAPHICS CARD</label>
                            <input type="text" class="form-control mt-2" value={graphicscard} id="graphicscard" onChange={(e) => SetGraphicscard(e.target.value)} placeholder="GRAPHICS CARD" />
                        </div><br />
                    </div>
                    <div style={{ marginTop: 40 }}>
                        <input style={{ cursor: 'pointer' }} type="file" name="" id="imageInput" multiple onChange={handleImageSelect} /><br /><br />

                        {
                            image.length > 0 && image.map((i) => {
                                return (
                                    <>
                                        <img className='Image-remove' src={i} width={100} alt="" />
                                        <button className='Remove-btn' onClick={() => RemoveImage(i)}>X</button>
                                    </>
                                )
                            })
                        }
                    </div>

                    <div className='mt-2 but'>

                        <button onClick={Sub}
                            class="buttoncd button-4 ps-2 pt-2 pb-2"
                        >Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Admin;
