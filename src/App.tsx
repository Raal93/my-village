import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import PageWrapper from './components/organisms/PageWrapper/PageWrapper';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import RatuszPage from './pages/RatuszPage/RatuszPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import SimulatorPage from './pages/SimulatorPage/SimulatorPage';
import VillagePage from './pages/VillagePage/VillagePage';

const App = () => {
  return (
    <BrowserRouter basename="/my-village">
      <Router>
        <PageWrapper>
          <Routes>
            <Route index path="/my-village/" element={<VillagePage />} />
            <Route index path="/my-village/ratusz" element={<RatuszPage />} />
            <Route index path="/my-village/settings" element={<SettingsPage />} />
            <Route index path="/my-village/simulator" element={<SimulatorPage />} />
            <Route index path="/*" element={<ErrorPage />} />
          </Routes>
        </PageWrapper>
      </Router>
    </BrowserRouter>
  );
};

export default App;
