import React from "react";
import Recovery from "../src/modules/user/recovery/components/Recovery";
import { Provider } from "react-redux";
import store from "../src/store";

function restore() {
  return (
    <Provider store={store}>
        <Recovery />
    </Provider>
  );
}

export default restore;
