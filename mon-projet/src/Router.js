import React from 'react'
import { BrowserRouter  , Routes, Route } from 'react-router-dom';
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Navbar from "./Components/Navbar";


export default function Router() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/page1' element={<Page1/>} />
                <Route path='/page2' element={<Page2/>} />
                <Route path='/page3' element={<Page3/>} />
            </Routes>
        </BrowserRouter>
    )
}
