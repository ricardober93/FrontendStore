import React from "react";
import Profile from "../src/modules/user/profile/components/Profile";
import Layout from "../src/modules/layouts/layout";
import { Provider } from "react-redux";
import store from "../src/store";

export default function profile() {
  return (
    <Provider store={store}>
      <Layout>
        <Profile />
      </Layout>
    </Provider>
  );
}
