import { Provider } from "react-redux";
import store from "../src/store";
import ProductoAdmin from "../src/modules/market/dashboard/pages/ProductoAdmin";

export default function dashboardProduct() {
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
      <ProductoAdmin />
    </Provider>
  );
}
