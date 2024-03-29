import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './Footer';
import Main from './Main';
import Home from './Home/Home';
import Listing from './Listing/listingLogic';
import Details from './Details/detailsLogic';
import PlaceOrder from './Order/PlaceOrder';
import ViewOrder from './Order/ViewOrder';
import Login from './login/loginComponent';
import Register from './login/registerComponent';


const Routing = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}>
                        <Route index element={<Home/>}/>
                        <Route path="listing/:mealId" element={<Listing/>}/>
                        <Route path="details" element={<Details/>}/>
                        <Route path="placeOrder/:restName" element={<PlaceOrder/>}/>
                        <Route path="viewOrder" element={<ViewOrder/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="register" element={<Register/>}/>
                    </Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default Routing;