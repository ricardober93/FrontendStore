import React from "react";
import FormLogin from "../src/modules/user/auth/components/FormLogin";
import Layout from "../src/modules/layouts/layout";
import { Provider } from "react-redux";
import store from "../src/store";

export default function profile() {
  return (
    <Provider store={store}>
      <Layout>
        <FormLogin />
      </Layout>
    </Provider>
  );
}
