import FormLogin from "../src/modules/user/auth/components/FormLogin";
import Layout from "../src/modules/layouts/layout";
import { Provider } from "react-redux";
import store from "../src/store";

function login() {
  return (
    <Provider store={store}>
      <Layout>
        <FormLogin />
      </Layout>
    </Provider>
  );
}

export default login;
