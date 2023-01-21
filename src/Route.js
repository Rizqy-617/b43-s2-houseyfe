import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailPage from './pages/Detail';

import Home from './pages/Home';

function RoutePage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail' element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutePage;