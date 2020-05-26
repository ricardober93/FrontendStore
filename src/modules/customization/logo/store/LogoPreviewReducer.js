// const logoImg = JSON.parse(localStorage.getItem("logo"));

//cada reducer tiene su propio state
const initialState = {
  logoPreview: {},
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "SET_LOGO_PREVIEW":
      return {
        ...state,
        logoPreview: action.payload,
      };
    default:
      return state;
  }
}
