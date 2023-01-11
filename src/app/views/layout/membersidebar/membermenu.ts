import { MenuItem } from './membermenu.model';

export const MENU: MenuItem[] = [
  // {
  //   label: 'Miembros',
  //   isTitle: true
  // },
  // {
  //   label: 'Activos',
  //   icon: 'user-check',
  //   link: '/members/memberlist',
    
  // },
  // {
  //   label: 'Solicitudes',
  //   icon: 'user-plus',
  //   link: '/members/request',
  //   badge: {
  //     variant: 'primary',
  //     text: '2',
  //   }
  // },
  {
    label: 'Autopartes',
    isTitle: true
  },
    {
    label: 'Inventario',
    icon: 'package',
    link: '/apps/chat',
  },
  {
    label: 'Autos',
    isTitle: true
  },
  {
    label: 'Catalogo',
    icon: 'truck',
    link: '/apps/chat',
  },
];
