import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailPage from './pages/Detail';
import Profile from './pages/Profile';
import BookingPage from './pages/Booking';

import Home from './pages/Home';

function RoutePage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail' element={<DetailPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/booking' element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutePage;