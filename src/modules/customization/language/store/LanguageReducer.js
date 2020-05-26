import { messagesSpanish } from "../messages";

// const currentLanguage = JSON.parse(localStorage.getItem("language"));

const initialState = {
  language: "es",
  messages: messagesSpanish,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "SET_LANGUAGE":
      return {
        ...state,
        language: action.payload.language,
        messages: action.payload.messages,
      };
    default:
      return state;
  }
}
