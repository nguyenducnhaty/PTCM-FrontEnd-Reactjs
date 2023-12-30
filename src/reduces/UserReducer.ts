// UserReducer.ts
export const errorInitialState: string | null = null;

export enum USER_ACTION {
  SET_USER = 'SET_USER',
  REMOVE_USER = 'REMOVE_USER',
}

interface SetUserAction {
  type: USER_ACTION.SET_USER;
  accessToken: string;
  user: {
    email: string;
    id: number;
  };
}
interface RemoveUserAction {
  type: USER_ACTION.REMOVE_USER;
}

export type UserAction = SetUserAction | RemoveUserAction;

const UserReducer = (state: UserStateType, action: UserAction): UserStateType => {
  switch (action.type) {
    case USER_ACTION.SET_USER:
      return {
        ...state,
        accessToken: action.accessToken,
        user: action.user,
      };
    case USER_ACTION.REMOVE_USER:
      return {
        ...state,
        accessToken: null,
        user: null,
      };
    default:
      return state;
  }
};

export default UserReducer;

interface UserStateType {
  accessToken: string | null;
  user: {
    email: string;
    id: number;
  } | null;
}
