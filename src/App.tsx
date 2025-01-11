import { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import {  Dialog, DialogContent, CircularProgress } from '@mui/material';

const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const Navbar = lazy(() => import('./pages/Navbar/Navbar'));
const NotFound = lazy(() => import('./pages/not-found/NotFound'));
const Sidebar = lazy(() => import('./pages/Sidebar/Sidebar'));
const Home = lazy(() => import('./pages/Home/Home'));

const LoadingComponent = () => {
  return (
    <Dialog open={true}>
      <DialogContent>
        <CircularProgress />
      </DialogContent>
    </Dialog>
  )
};

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const toggelSideBar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Router>
      <Suspense fallback={<LoadingComponent />}>
      <Navbar toggelSideBar={toggelSideBar} />
      <div style={{ display: 'flex' }}>
        <Sidebar isOpen={isOpen} />
        <div style={{ flex: 1, marginLeft:  isOpen ? '250px' : '0' }}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      </Suspense>
    </Router>
  );
}

export default App;
