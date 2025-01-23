import { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import { Dialog, DialogContent, CircularProgress } from '@mui/material';

const PackageHistory = lazy(() => import('./pages/Packages/PackageHistory'));
const Transaction = lazy(() => import('./pages/Transaction/Transaction'));
const MailBox = lazy(() => import('./pages/MailBox/MailBox'));
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
const DailyPayout = lazy(() => import('./pages/Earnings/DailyPayout'));
const Login = lazy(() => import('./pages/Auth/Login'));
const Register = lazy(() => import('./pages/Auth/Register'));
const Wallet = lazy(() => import('./pages/Wallet/Wallet'));

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
        <div style={{ 
          display: 'flex', 
          maxWidth: '100vw',
          overflowX: 'hidden',
        }}>
          <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)}  />
          <div style={{ 
            flex: 1, 
            marginLeft: isOpen ? '250px' : '0',
            transition: 'margin-left 0.3s ease-in-out',
            width: '100%',
            overflowX: 'hidden',
          }}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/account/profile" element={<Profile />} />
              <Route path="/account/kyc" element={<KYC />} />
              <Route path="/account/change-password" element={<ChangePassword />} />
              
              <Route path="/activate" element={<Activate />} />
              <Route path="/team/new-register" element={<NewResgister />} />
              <Route path="/package/used" element={<UsedPackage />} />
              <Route path="/package/unused" element={<UnUsedPackage />} />
              <Route path="/package/transfer" element={<TransferPackage />} />
              <Route path="/package/history" element={<PackageHistory />} />
              {/* <Route path="/team/tree" element={<Tree />} /> */}
              <Route path="/team/direct" element={<Direct />} />
              <Route path="/earnings/level-benefits" element={<LevelBenifits />} />
              <Route path="/earnings/daily-payout" element={<DailyPayout />} />
              <Route path="/transactions" element={<Transaction />} />
              <Route path="/mailbox" element={<MailBox />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
