import { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import './App.css';
import './index.css';
import { Dialog, DialogContent, CircularProgress } from '@mui/material';

import Members, { ActiveMembers, InActiveMembers, PendingMembers } from './pages/Admin-Pages/Members/Members';
import { Accessories, Computers, Electronics, Laptops, Mobiles } from './pages/Admin-Pages/Items/Items';
import { GeneratePackages, PackageHistory, PackageRequests, UnusedPackages, UsedPackages } from './pages/Admin-Pages/Packages/Packages';
import Tree from './pages/User-Pages/Team/Tree';
import Team from './pages/User-Pages/Team/Team';

// public pages
const Home = lazy(() => import('./pages/Home/Home'));
const Login = lazy(() => import('./pages/Auth/Login'));
const Register = lazy(() => import('./pages/Auth/Register'));
const Navbar = lazy(() => import('./pages/Navbar/Navbar'));
const Sidebar = lazy(() => import('./pages/Sidebar/Sidebar'));
const NotFound = lazy(() => import('./pages/not-found/NotFound'));

// admin pages
const AdminDashboard = lazy(() => import('./pages/Admin-Pages/AdminDashboard/Dashboard'));
const AdminCashBack = lazy(() => import('./pages/Admin-Pages/Incomes/CashBack'));
const AdminDailyBenifitsPayouts = lazy(() => import('./pages/Admin-Pages/Incomes/DailyBenifitsPayouts'));
const AdminLevelBenifits = lazy(() => import('./pages/Admin-Pages/Incomes/LevelBenifits'));
const AdminPayout = lazy(() => import('./pages/Admin-Pages/Payout/Payout'));
const AdminOrders = lazy(() => import('./pages/Admin-Pages/Orders/Orders'));
const AdminTransactions = lazy(() => import('./pages/Admin-Pages/Transactions/Transactions'));
const AdminSMSTransactions = lazy(() => import('./pages/Admin-Pages/Transactions/SMS-Transactions'));
const AdminSupportTickets = lazy(() => import('./pages/Admin-Pages/SupportTicket/SupportTickets'));
const AdminNews = lazy(() => import('./pages/Admin-Pages/News/News'));
const AdminHolidays = lazy(() => import('./pages/Admin-Pages/Holidays/Holidays'));

// user pages
const UserDashboard = lazy(() => import('./pages/User-Pages/UserDashboard/Dashboard'));
const UserPackageHistory = lazy(() => import('./pages/User-Pages/Packages/PackageHistory'));
const UserTransaction = lazy(() => import('./pages/User-Pages/Transaction/Transaction'));
const UserMailBox = lazy(() => import('./pages/User-Pages/MailBox/MailBox'));
const UserProfile = lazy(() => import('./pages/User-Pages/Profile/Profile'));
const UserKYC = lazy(() => import('./pages/User-Pages/KYC/KYC'));
const UserChangePassword = lazy(() => import('./pages/User-Pages/Change-Password/ChangePassword'));
const UserActivate = lazy(() => import('./pages/User-Pages/Activate/Activate'));
const UserNewResgister = lazy(() => import('./pages/User-Pages/Team/NewResgister'));
const UserUsedPackage = lazy(() => import('./pages/User-Pages/Packages/UsedPackage'));
const UserUnUsedPackage = lazy(() => import('./pages/User-Pages/Packages/UnUsedPackage'));
const UserTransferPackage = lazy(() => import('./pages/User-Pages/Packages/TransferPackage'));
const UserDirect = lazy(() => import('./pages/User-Pages/Team/Direct'));
const UserLevelBenifits = lazy(() => import('./pages/User-Pages/Earnings/LeveBenifits'));
const UserDailyPayout = lazy(() => import('./pages/User-Pages/Earnings/DailyPayout'));
const UserWallet = lazy(() => import('./pages/User-Pages/Wallet/Wallet'));

const LoadingComponent = () => {
  return (
    <Dialog open={true}>
      <DialogContent>
        <CircularProgress />
      </DialogContent>
    </Dialog>
  )
};

const ShouldHideSidebarComponent = () => {
  const location = useLocation();
  const publicPaths = ['/', '/login', '/register'];
  return publicPaths.includes(location.pathname);
}

function App() {
  const [isOpen, setIsOpen] = useState(true);
  
  const toggelSideBar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Router>
      <Suspense fallback={<LoadingComponent />}>
        <RoutesProvider isOpen={isOpen} setIsOpen={setIsOpen} toggelSideBar={toggelSideBar} />
      </Suspense>
    </Router>
  );
}

const RoutesProvider = ({ isOpen, setIsOpen, toggelSideBar }: { isOpen: boolean, setIsOpen: (value: boolean) => void, toggelSideBar: () => void }) => {
  const shouldHide = ShouldHideSidebarComponent();
  const [role, setRole] = useState('ADMIN');
  
  return (
    <>
      <Navbar toggelSideBar={toggelSideBar} shouldHide={shouldHide} />
      <div style={{ 
        display: 'flex', 
        maxWidth: '100vw',
        overflowX: 'hidden',
      }}>
        {!shouldHide && (
          <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} role={role} />
        )}
        <div style={{ 
          flex: 1, 
          marginLeft: !shouldHide && isOpen ? '250px' : '0',
          transition: 'margin-left 0.3s ease-in-out',
          width: '100%',
          overflowX: 'hidden',
        }}>
          <Routes>
            {/* public routes */}
            <Route index element={<Home role={role} setRole={setRole} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* admin routes */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} /> {/* @todo need to protect based on role */}
            
            {/* admin member routes */}
            <Route path="/admin/members" element={<Members />} />
            <Route path="/admin/members/pending" element={<PendingMembers />} />
            <Route path="/admin/members/active" element={<ActiveMembers />} />
            <Route path="/admin/members/inactive" element={<InActiveMembers />} />

            {/* admin package routes */}
            <Route path="/admin/package/generate" element={<GeneratePackages />} />
            <Route path="/admin/package/requests" element={<PackageRequests />} />
            <Route path="/admin/package/used" element={<UsedPackages />} />
            <Route path="/admin/package/unused" element={<UnusedPackages />} />
            <Route path="/admin/package/history" element={<PackageHistory />} />

            {/* admin income routes */}
            <Route path="/admin/income/cashback" element={<AdminCashBack />} />
            <Route path="/admin/income/level-benefits" element={<AdminLevelBenifits />} />
            <Route path="/admin/income/daily-payouts" element={<AdminDailyBenifitsPayouts />} />

            <Route path="/admin/payout" element={<AdminPayout />} />
            <Route path="/admin/orders" element={<AdminOrders />} />

            {/* admin items routes */}
            <Route path="/admin/items/computers" element={<Computers />} />
            <Route path="/admin/items/laptops" element={<Laptops />} />
            <Route path="/admin/items/mobiles" element={<Mobiles />} />
            <Route path="/admin/items/electronics" element={<Electronics />} />
            <Route path="/admin/items/accessories" element={<Accessories />} />

            {/* admin transaction routes */}
            <Route path="/admin/transactions" element={<AdminTransactions />} />
            <Route path="/admin/transactions/sms" element={<AdminSMSTransactions />} />

            <Route path="/admin/support-tickets" element={<AdminSupportTickets />} />
            <Route path="/admin/news" element={<AdminNews />} />
            <Route path="/admin/holidays" element={<AdminHolidays />} />
            <Route path="/admin/logout" element={<Navigate to="/" />} />
            
            
            {/* user routes */}
            <Route path="/user/dashboard" element={<UserDashboard />} /> // @todo need to protect based on role

            {/* user account routes */}
            <Route path="/user/account/profile" element={<UserProfile />} />
            <Route path="/user/account/kyc" element={<UserKYC />} />
            <Route path="/user/account/change-password" element={<UserChangePassword />} />
            
            <Route path="/user/activate" element={<UserActivate />} />
            {/* package routes */}
            <Route path="/user/package/used" element={<UserUsedPackage />} />
            <Route path="/user/package/unused" element={<UserUnUsedPackage />} />
            <Route path="/user/package/transfer" element={<UserTransferPackage />} />
            <Route path="/user/package/history" element={<UserPackageHistory />} />
            
            {/* team routes */}
            <Route path="/user/team/tree" element={<Tree />} />
            <Route path="/user/team" element={<Team />} />
            <Route path="/user/team/new-register" element={<UserNewResgister />} />
            <Route path="/user/team/direct" element={<UserDirect />} />
            
            {/* earnings routes */}
            <Route path="/user/earnings/level-benefits" element={<UserLevelBenifits />} />
            <Route path="/user/earnings/daily-payout" element={<UserDailyPayout />} />
            
            <Route path="/user/transactions" element={<UserTransaction />} />

            <Route path="/user/mailbox" element={<UserMailBox />} />
            <Route path="/user/wallet" element={<UserWallet />} />
            <Route path="/user/logout" element={<Navigate to="/" />} />

            {/* not found route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
