import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Miembros',
    isTitle: true
  },
  {
    label: 'Activos',
    icon: 'user-check',
    link: '/members/memberlist',
  },
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
    link: '/parts/partslist',
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
  {
    label: 'Ventas',
    isTitle: true
  },
  {
    label: 'Clientes',
    icon: 'award',
    link: '/apps/chat',
  },
  {
    label: 'Ordenes de compra',
    icon: 'shopping-cart',
    link: '/apps/chat',
  },
];
