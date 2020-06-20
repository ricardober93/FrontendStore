import ProductDetail from "../../src/modules/market/products/pages/ProductDetail";
import { Provider } from "react-redux";
import store from "../../src/store";

export default function Product() {
  return (
    <Provider store={store}>
      <ProductDetail />
    </Provider>
  );
}
