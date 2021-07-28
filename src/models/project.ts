import {Status} from './status';
import {Item} from './item';

export class Project {

  id: number;
  title: string;
  authors: string[];
  directors: string[];
  status: Status;
  items: Item[];

}
