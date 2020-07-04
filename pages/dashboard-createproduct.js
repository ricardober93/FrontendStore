import { Provider } from "react-redux";
import store from "../src/store";
import CreateProduct from "../src/modules/market/dashboard/pages/CreateProduct";

export default function dashboardCreateProduct() {
  return (
    <Provider store={store}>
    <style global jsx>
        {`
        html,
        body,
        div#__next {
          height: 100%;

        }`}
       </style> 
      <CreateProduct />
    </Provider>
  );
}
