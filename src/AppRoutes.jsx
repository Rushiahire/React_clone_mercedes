import React from "react";
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import BuyOnline from './components/BuyOnline';
import Finance from './components/Finance';
import OurBrand from './components/OurBrand';
import OurModels from './components/OurModels';

const AppRoutes = () => {
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/buyonline" element={<BuyOnline/>}/>
            <Route path="/finance" element={<Finance/>}/>
            <Route path="/ourbrand" element={<OurBrand/>}/>
            <Route path="/ourmodel" element={<OurModels/>}/>

        </Routes>
        </>
    )
}

export default AppRoutes;