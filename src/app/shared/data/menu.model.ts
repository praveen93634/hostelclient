
export interface MenuItem {
  id: string;
  label: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  route?: string;
  classes?: string;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  subMenu?: MenuItem[];
  role?: string[];
  isMainParent?: boolean;
}