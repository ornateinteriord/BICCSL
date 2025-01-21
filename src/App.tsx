import { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import { Dialog, DialogContent, CircularProgress } from '@mui/material';

const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const Navbar = lazy(() => import('./pages/Navbar/Navbar'));
const NotFound = lazy(() => import('./pages/not-found/NotFound'));
const Sidebar = lazy(() => import('./pages/Sidebar/Sidebar'));
const Home = lazy(() => import('./pages/Home/Home'));
const Profile = lazy(() => import('./pages/Profile/Profile'));
const KYC = lazy(() => import('./pages/KYC/KYC'));
const ChangePassword = lazy(() => import('./pages/Change-Password/ChangePassword'));
const Activate = lazy(() => import('./pages/Activate/Activate'));
const NewResgister = lazy(() => import('./pages/New-Resgister/NewResgister'));
const UsedPackage = lazy(() => import('./pages/Packages/UsedPackage'));
const UnUsedPackage = lazy(() => import('./pages/Packages/UnUsedPackage'));
const TransferPackage = lazy(() => import('./pages/Packages/TransferPackage'));
const Direct = lazy(() => import('./pages/Team/Direct'));
const LevelBenifits = lazy(() => import('./pages/Earnings/LeveBenifits'));

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
            <Route path="/account/profile" element={<Profile />} />
            <Route path="/account/kyc" element={<KYC />} />
            <Route path="/account/change-password" element={<ChangePassword />} />
            <Route path="/activate" element={<Activate />} />
            <Route path="/team/new-register" element={<NewResgister />} />
            <Route path="/package/used" element={<UsedPackage />} />
            <Route path="/package/unused" element={<UnUsedPackage />} />
            <Route path="/package/transfer" element={<TransferPackage />} />
            {/* <Route path="/team/tree" element={<Tree />} /> */}
            <Route path="/team/direct" element={<Direct />} />
            <Route path="/earnings/level-benefits" element={<LevelBenifits />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      </Suspense>
    </Router>
  );
}

export default App;
