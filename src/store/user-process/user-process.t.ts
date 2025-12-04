import {AuthorizationStatus} from '../../const.ts';
import {CitiesCardProps} from '../../types/cities-card.ts';
import {UserProps} from '../../types/user.ts';


export type UserProcessInitial = {
  authorizationStatus: AuthorizationStatus;
  user: {
    email: UserProps['email'] | null;
    avatar: UserProps['avatarUrl'] | null;
    favorites: CitiesCardProps[];
  };
}
