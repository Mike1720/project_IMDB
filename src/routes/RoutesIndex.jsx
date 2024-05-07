import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/Home.jsx';
import { NotFound } from "../pages/NotFound/NotFound.jsx";
import { Search } from "../pages/Search/Search.jsx";

export const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={< Search />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
