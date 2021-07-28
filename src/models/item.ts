import {Student} from './student';
import {Jury} from './jury';
import {Director} from './director';
import {Scale} from './scale';

export class Item {
  _id: string;
  name: string;
  grade: number;
  max_grade: number;
  relative_grade: number;
  weight: number;
  relative_weigth: number;
  items: Item[];
  grade_scale: Scale;
  createdAt: string;
  evaluation_status: string;
  students: Student[];
  juries: Jury[];
  director: Director;
}
