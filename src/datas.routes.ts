import {
      Permission_controller,
      Product_controller,
      Role_controller,
      Session_controller,
      User_controller,
} from './app/controllers';

export const data = [
      {
            controller: User_controller.store,
            url: '/user',
            method: 'post',
            description: '',
      },
      {
            controller: Session_controller.store,
            url: '/session',
            method: 'post',
            description: '',
      },
      {
            controller: Role_controller.store,
            url: '/role',
            method: 'post',
            description: '',
      },
      {
            controller: Role_controller.index,
            url: '/roles',
            method: 'get',
            description: '',
      },
      {
            controller: Permission_controller.store,
            url: '/permission',
            method: 'post',
            description: '',
      },
      {
            controller: Permission_controller.index,
            url: '/permissions',
            method: 'get',
            description: '',
      },
      {
            controller: Product_controller.store,
            url: '/product',
            method: 'get',
            description: '',
      },
      {
            controller: Product_controller.index,
            url: '/products',
            method: 'get',
            description: '',
      },
];
