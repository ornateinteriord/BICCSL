export interface SideBarMenuItemType {
    name: string;
    icon: JSX.Element;
    path?: string;
    isExpandable?: boolean;
    subItems?: Array<{ name: string; path: string; icon: JSX.Element }>;
  }
