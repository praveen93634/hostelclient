import { MenuItem } from "./menu.model";

export const MenuItems: MenuItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    subMenu: [
      {
        id: 'default',
        label: 'Dashboard',
        title: 'Dashboard',
        type: 'item',
        classes: 'nav-item',
        route: '/default',
        icon: 'ti ti-dashboard',
        breadcrumbs: false
      }
    ]
  },
];
