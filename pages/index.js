<<<<<<< HEAD
import ProductList from "../src/modules/market/product/listProducts/pages/ListProducts";
=======
import ListProduct from "../src/modules/market/products/pages/ListProducts";
import { Provider } from "react-redux";
import store from "../src/store";
>>>>>>> fc3b6957a430361e54313a078bfbf8d81e839728

export default function Home() {
  return (
    <Provider store={store}>
      <ListProduct />
    </Provider>
  );
}
