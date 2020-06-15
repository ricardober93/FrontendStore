import { SING_IN, SING_UP } from "./AuthTypes";

const InicialState = {
  token: {},
  user:{}
};

export default function AuthReducer(state = InicialState, action) {
  switch (action.type) {
    case SING_IN:
      return { ...state, state: action.payload };
    case SING_UP:
      return { ...state, state: action.payload };

    default:
      return state;
  }
}
