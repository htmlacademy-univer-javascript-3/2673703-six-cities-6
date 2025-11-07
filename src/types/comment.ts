import {UserProps} from './user.ts';


export type CommentProps = {
  id: string;
  date: string;
  user: UserProps;
  comment: string;
  rating: number;
}
