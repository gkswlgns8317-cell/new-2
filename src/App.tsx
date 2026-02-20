/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import QnA from './pages/QnA';
import Diagnosis from './pages/Diagnosis';
import Cases from './pages/Cases';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services/:type" element={<Service />} />
          <Route path="qna" element={<QnA />} />
          <Route path="diagnosis" element={<Diagnosis />} />
          <Route path="cases" element={<Cases />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

