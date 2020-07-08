import { Provider } from "react-redux";
import store from "../src/store";
import ShippingAdmin from "../src/modules/market/dashboard/pages/ShippingAdmin";

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
      <ShippingAdmin />
    </Provider>
  );
}
