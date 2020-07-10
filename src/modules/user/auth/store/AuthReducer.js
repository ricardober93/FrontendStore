import { SING_IN, SING_UP } from "./AuthTypes";

const user = JSON.parse(localStorage.getItem('user'));

const InicialState = {
  token: user ? user.token : '',
  user: user ? user.user : {},
};

export default function AuthReducer(state = InicialState, action) {
  switch (action.type) {
    case 'SING_IN':
      return { ...state, token: action.payload.token, user: action.payload.user };
    case SING_UP:
      return { ...state, state: action.payload };

    default:
      return state;
  }
}
