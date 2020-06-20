import React from "react";
import Signin from "../src/modules/user/auth/components/SingIn";
import { Provider } from "react-redux";
import store from "../src/store";

function singin() {
  return (
    <Provider store={store}>
        <Signin />;
    </Provider>
  );

}

export default singin;