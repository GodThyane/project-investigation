import {User} from './user';
import {Item} from './item';

export class Proposal {

  proposalTitle: string;
  students: User[];
  juries: User[];
  items: Item[];
  maxGrade: number;
  grade: number;
}
