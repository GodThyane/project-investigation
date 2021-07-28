import {User} from '../models/user';
import {Rol} from '../models/rol';
import {ITEMS} from './items';

export const USERS: User[] = [{

  firstName: 'Leticia',
  lastName: 'Martínez',
  email: 'leticia.martinez@uptc.edu.co',
  institutionalId: 201511283,
  rol: Rol.JURY,
  projects: ITEMS
},
  {
    firstName: 'Arnaldo',
    lastName: 'López',
    email: 'arnoldo.lopez@uptc.edu.co',
    institutionalId: 201511284,
    rol: Rol.JURY,
    projects: ITEMS
  },
  {
    firstName: 'Eduardo',
    lastName: 'Vega',
    email: 'eduardo.vega@uptc.edu.co',
    institutionalId: 201611285,
    rol: Rol.JURY,
    projects: ITEMS
  },
  {
    firstName: 'José',
    lastName: 'Daza Díaz',
    email: 'jose.daza01@uptc.edu.co',
    institutionalId: 201611283,
    rol: Rol.STUDENT,
    projects: [ITEMS[0], ITEMS[1], ITEMS[2], ITEMS[3]]
  },
  {
    firstName: 'José',
    lastName: 'Díaz Rincón',
    email: 'jose.diaz@uptc.edu.co',
    institutionalId: 201611284,
    rol: Rol.STUDENT,
    projects: [ITEMS[0], ITEMS[1], ITEMS[2], ITEMS[3]]
  },
  {
    firstName: 'Jhonn',
    lastName: 'Hernández Vega',
    email: 'jhonn.hernandez@uptc.edu.co',
    institutionalId: 201611285,
    rol: Rol.STUDENT,
    projects: [ITEMS[4], ITEMS[5], ITEMS[6], ITEMS[7], ITEMS[8]]
  }

];
