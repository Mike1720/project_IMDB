import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from "../pages/Home/Home.jsx";
import { NotFound } from "../pages/NotFound/NotFound.jsx";
import { DetailSong } from '../pages/DetailSong/DetailSong.jsx';

export const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detail-song' element={<DetailSong />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
