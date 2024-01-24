import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PageWrapper from './components/organisms/PageWrapper/PageWrapper';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import RatuszPage from './pages/RatuszPage/RatuszPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import SimulatorPage from './pages/SimulatorPage/SimulatorPage';
import VillagePage from './pages/VillagePage/VillagePage';

const App = () => {
  return (
    <Router>
      <PageWrapper>
        <Routes>
          <Route index path="/" element={<VillagePage />} />
          <Route index path="/ratusz" element={<RatuszPage />} />
          <Route index path="/settings" element={<SettingsPage />} />
          <Route index path="/simulator" element={<SimulatorPage />} />
          <Route index path="/*" element={<ErrorPage />} />
        </Routes>
      </PageWrapper>
    </Router>
  );
};

export default App;
