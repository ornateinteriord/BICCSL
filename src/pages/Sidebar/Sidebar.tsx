import './sidebar.scss';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SideBarMenuItem } from './SidebarUtils'
import { Avatar, Typography } from '@mui/material';
import { SideBarMenuItemType } from '../../store/store';
import { ExpandMoreIcon, ExpandLessIcon } from '../Icons';

const Sidebar = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<string>(SideBarMenuItem[0].name);
  const navigate = useNavigate();

  const handleToggle = (itemName: string) => {
    setExpandedItems(prev => {
      if (prev.includes(itemName)) {
        return prev.filter(item => item !== itemName);
      } else {
        return [...prev, itemName];
      }
    });
  };

  const handleSelect = (itemName: string) => {
    setSelectedItem(itemName);
  };

  return (
    <div className="sidebar open" style={{ width: '250px' }}>
      <div className="sidebar-header">
        <Avatar
          alt="User Avatar"
          src={`https://api.multiavatar.com/${"Deepanshu"}.svg`}
          sx={{ width: 50, height: 50 }}
        />
        <div className="welcome-text" style={{padding: '10px', color: '#fff'}}>
          <Typography>Welcome,</Typography>
          <Typography style={{fontWeight: 'bold'}}>Dipanshu</Typography>
        </div>
      </div>
      <div style={{ height: 'calc(100vh - 100px)', overflowY: 'auto', paddingBottom: '80px' }}>
        {SideBarMenuItem.map((item: SideBarMenuItemType) => (
          <div key={item.name}>
            <div 
              onClick={() => {
                if (item.isExpandable) {
                  handleToggle(item.name);
                }
                navigate(item.path!);
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
                  {expandedItems.includes(item.name) ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </span>
              )}
            </div>
            {item.isExpandable && (
              <motion.div 
                className="sub-items"
                initial={{ height: 0, opacity: 0 }} 
                animate={{ height: expandedItems.includes(item.name) ? 'auto' : 0, opacity: expandedItems.includes(item.name) ? 1 : 0 }} 
                exit={{ height: expandedItems.includes(item.name) ? 'auto' : 0, opacity: 0 }} 
                transition={{ duration: 0.3 }}
              >
                {expandedItems.includes(item.name) && item.subItems?.map(subItem => (
                  <Link key={subItem.name} to={subItem.path} className="sub-item">
                    <span className="sub-item-icon">{subItem.icon}</span>
                    <span className="sub-item-name">{subItem.name}</span>
                  </Link>
                ))}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;