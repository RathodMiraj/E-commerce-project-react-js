import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ConfirmPass from './ConfirmPass';
import Admin from './Admin';
import AllProduct from './AllProduct';
import ProductDetails from './ProductDetails';
import Index1 from './Index1';
import UserProduct from './UserProduct';
import ProtecterRouter from './ProtecterRouter';
import CartPage from './CartPage';
import Product from './Product';
import About from './About';
import Contact from './Contact';
import AllOrderPage from './AllUserOrder';
import PersonalDetails from './PersonalDetails';
import AllOrder from './AllOrder';
import { ThemeContext } from './Themecontext';

const RouterContainer = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <div className={`${theme === "light" ? "light" : "dark"} wrapper`}>
                <BrowserRouter>
                    <Routes>

                        <Route path='/' element={<Login />} />
                        <Route path='register' element={<Register />} />

                        <Route path='/admin' element={<ProtecterRouter><Admin /></ProtecterRouter>} />
                        <Route path='/allProduct' element={<ProtecterRouter><AllProduct /></ProtecterRouter>} />
                        <Route path='/index' element={<ProtecterRouter><Index1 /></ProtecterRouter>} />
                        <Route path='/cart' element={<ProtecterRouter><CartPage /></ProtecterRouter>} />
                        <Route path='/contact' element={<ProtecterRouter><Contact /></ProtecterRouter>} />

                        <Route path='/product-details/:id' element={<ProtecterRouter><ProductDetails /></ProtecterRouter>} />
                        <Route path='/user-product/:id' element={<ProtecterRouter><UserProduct /></ProtecterRouter>} />
                        <Route path='/conformPassword/:id' element={<ProtecterRouter><ConfirmPass /></ProtecterRouter>} />
                        <Route path='/product' element={<ProtecterRouter><Product /></ProtecterRouter>} />
                        <Route path='/about' element={<ProtecterRouter><About /></ProtecterRouter>} />
                        <Route path='/profile' element={<ProtecterRouter><PersonalDetails /></ProtecterRouter>} />
                        <Route path='/allUserOrder' element={<ProtecterRouter><AllOrderPage /></ProtecterRouter>} />
                        <Route path='/adminOrder' element={<ProtecterRouter><AllOrder /></ProtecterRouter>} />

                        <Route path='/*' element={<Login />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
};

export default RouterContainer;