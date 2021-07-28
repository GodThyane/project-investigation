import {Rol} from './rol';
import {Item} from './item';

export class User {

  institutionalId: number;
  email: string;
  firstName: string;
  lastName: string;
  rol: Rol;
  projects: Item[];

}
