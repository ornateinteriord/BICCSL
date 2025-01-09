import {
  DashboardIcon,
  AccountCircleIcon,
  CheckCircleIcon,
  GroupIcon,
  MonetizationOnIcon,
  ShowChartIcon,
  CreditCardIcon,
  MailOutlineIcon,
  ExitToAppIcon,
  PersonIcon,
  VerifiedUserIcon,
  LockIcon,
  InventoryIcon,
  SwapHorizIcon,
  HistoryIcon,
  PeopleIcon,
  AccountTreeIcon,
  PersonAddIcon,
  TrendingUpIcon,
  PaymentsIcon
} from '../Icons';

export interface SideBarMenuItemType {
    name: string;
    icon: JSX.Element;
    path?: string;
    isExpandable?: boolean;
    subItems?: Array<{ name: string; path: string; icon: JSX.Element }>;
  }


export const SideBarMenuItem: SideBarMenuItemType[] = [
    { name: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard', isExpandable: false },
    { 
      name: 'Account Info', 
      icon: <AccountCircleIcon />, 
      isExpandable: true, 
      subItems: [
        { name: 'Profile', path: '/account/profile', icon: <PersonIcon /> },
        { name: 'KYC', path: '/account/kyc', icon: <VerifiedUserIcon /> },
        { name: 'Change Password', path: '/account/change-password', icon: <LockIcon /> }
      ] 
    },
    { 
      name: 'Package', 
      icon: <DashboardIcon />, 
      isExpandable: true, 
      subItems: [
        { name: 'Used Package', path: '/package/used', icon: <InventoryIcon /> },
        { name: 'Unused Package', path: '/package/unused', icon: <InventoryIcon /> },
        { name: 'Transfer Package', path: '/package/transfer', icon: <SwapHorizIcon /> },
        { name: 'Package History', path: '/package/history', icon: <HistoryIcon /> }
      ] 
    },
    { name: 'Activate', icon: <CheckCircleIcon />, path: '/activate', isExpandable: false },
    { 
      name: 'Team', 
      icon: <GroupIcon />, 
      isExpandable: true, 
      subItems: [
        { name: 'Direct', path: '/team/direct', icon: <PeopleIcon /> },
        { name: 'Team', path: '/team', icon: <GroupIcon /> },
        { name: 'Tree', path: '/team/tree', icon: <AccountTreeIcon /> },
        { name: 'New Register', path: '/team/new-register', icon: <PersonAddIcon /> }
      ] 
    },
    { 
      name: 'Earnings', 
      icon: <MonetizationOnIcon />, 
      isExpandable: true, 
      subItems: [
        { name: 'Level Benefits', path: '/earnings/level-benefits', icon: <TrendingUpIcon /> },
        { name: 'Daily Payout', path: '/earnings/daily-payout', icon: <PaymentsIcon /> }
      ] 
    },
    { name: 'Transactions', icon: <ShowChartIcon />, path: '/transactions', isExpandable: false },
    { name: 'Wallet', icon: <CreditCardIcon />, path: '/wallet', isExpandable: false },
    { name: 'Mail Box', icon: <MailOutlineIcon />, path: '/mailbox', isExpandable: false },
    { name: 'Logout', icon: <ExitToAppIcon />, path: '/logout', isExpandable: false }
  ];
