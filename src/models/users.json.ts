import {User} from './user';
import {Rol} from './rol';
import {PROJECTS} from './projects.json';

export const USERS: User [] = [

  {
    institutionalId: 201611283, email: 'jose.daza01@uptc.edu.co', firstName: 'José Ismael', lastName: 'Daza Díaz', rol: Rol.JURY,
    projects : [PROJECTS[0], PROJECTS[1], PROJECTS[2], PROJECTS[3], PROJECTS[4]]},
  {institutionalId: 201611284, email: 'jose.daza02@uptc.edu.co', firstName: 'José Manuel', lastName: 'Díaz Rincón', rol: Rol.STUDENT,
    projects : []
  }
];
