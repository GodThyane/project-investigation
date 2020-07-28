import {Rol} from './rol';
import {Project} from './project';

export class User {

  institutionalId: number;
  email: string;
  firstName: string;
  lastName: string;
  rol: Rol;
  projects: Project[];

}
