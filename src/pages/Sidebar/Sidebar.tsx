import './sidebar.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GroupIcon from '@mui/icons-material/Group';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface SideBarMenuItemType {
  name: string;
  icon: JSX.Element;
  path?: string;
  isExpandable?: boolean;
  subItems?: Array<{ name: string; path: string }>;
}

const Sidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const SideBarMenuItem: SideBarMenuItemType[] = [
    { name: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard', isExpandable: false },
    { 
      name: 'Account Info', 
      icon: <AccountCircleIcon />, 
      isExpandable: true, 
      subItems: [
        { name: 'Profile', path: '/account/profile' },
        { name: 'KYC', path: '/account/kyc' },
        { name: 'Change Password', path: '/account/change-password' }
      ] 
    },
    { 
      name: 'Package', 
      icon: <DashboardIcon />, 
      isExpandable: true, 
      subItems: [
        { name: 'Used Package', path: '/package/used' },
        { name: 'Unused Package', path: '/package/unused' },
        { name: 'Transfer Package', path: '/package/transfer' },
        { name: 'Package History', path: '/package/history' }
      ] 
    },
    { name: 'Activate', icon: <CheckCircleIcon />, path: '/activate', isExpandable: false },
    { 
      name: 'Team', 
      icon: <GroupIcon />, 
      isExpandable: true, 
      subItems: [
        { name: 'Direct', path: '/team/direct' },
        { name: 'Team', path: '/team' },
        { name: 'Tree', path: '/team/tree' },
        { name: 'New Register', path: '/team/new-register' }
      ] 
    },
    { 
      name: 'Earnings', 
      icon: <MonetizationOnIcon />, 
      isExpandable: true, 
      subItems: [
        { name: 'Level Benefits', path: '/earnings/level-benefits' },
        { name: 'Daily Payout', path: '/earnings/daily-payout' }
      ] 
    },
    { name: 'Transactions', icon: <ShowChartIcon />, path: '/transactions', isExpandable: false },
    { name: 'Wallet', icon: <CreditCardIcon />, path: '/wallet', isExpandable: false },
    { name: 'Mail Box', icon: <MailOutlineIcon />, path: '/mailbox', isExpandable: false },
    { name: 'Logout', icon: <ExitToAppIcon />, path: '/logout', isExpandable: false }
  ];

  const handleToggle = (itemName: string) => {
    setExpanded(expanded === itemName ? null : itemName);
  };

  const handleSelect = (itemName: string) => {
    setSelectedItem(itemName);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      {SideBarMenuItem.map(item => (
        <div key={item.name}>
          <div 
            onClick={() => {
              if (item.isExpandable) {
                handleToggle(item.name);
              }
              handleSelect(item.name);
            }} 
            className={`menu-item ${selectedItem === item.name ? 'selected' : ''}`}
          >
            {item.icon} {item.name}
            {item.isExpandable && (
              <span style={{ marginLeft: 'auto' }} onClick={(e) => {
                e.stopPropagation();
                handleToggle(item.name);
              }}>
                {expanded === item.name ? <RemoveIcon /> : <AddIcon />}
              </span>
            )}
          </div>
          {item.isExpandable && (
            <motion.div 
              className="sub-items"
              initial={{ height: 0, opacity: 0 }} 
              animate={{ height: expanded === item.name ? 'auto' : 0, opacity: expanded === item.name ? 1 : 0 }} 
              exit={{ height: expanded === item.name ? 'auto' : 0, opacity: 0 }} 
              transition={{ duration: 0.3 }}
            >
              {expanded === item.name && item.subItems?.map(subItem => (
                <Link key={subItem.name} to={subItem.path}>
                  {subItem.name}
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;