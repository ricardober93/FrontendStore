import React from "react";
import Recovery from "../src/modules/user/recovery/components/Recovery";
import Layout from "../src/modules/layouts/layout";
import { Provider } from "react-redux";
import store from "../src/store";

function restore() {
  return (
    <Provider store={store}>
      <Layout>
        <Recovery />
      </Layout>
    </Provider>
  );
}

export default restore;
