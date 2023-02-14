import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BlogList from './Pages/BlogList'
import BlogPost from './Pages/BlogPost'
import BlogDetail from './Pages/BlogDetail'





export default function router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/BlogList' element={<BlogList />} />
                <Route path='/BlogPost' element={<BlogPost />} />

            </Routes>
        </BrowserRouter>
    )
}
