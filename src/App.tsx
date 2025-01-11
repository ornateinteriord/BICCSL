import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';

import Dashboard from './pages/Dashboard/Dashboard';
import Navbar from './pages/Navbar/Navbar';
import NotFound from './pages/not-found/NotFound';
import Sidebar from './pages/Sidebar/Sidebar';
import Home from './pages/Home/Home';

function App() {

  return (
    <Router>
      <Navbar/>
      <div style={{ display: 'flex' }}>
        <Sidebar  />
        <div style={{ flex: 1, marginLeft:  '250px' }}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
