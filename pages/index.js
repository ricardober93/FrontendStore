import ListProduct from '../src/modules/market/product/listProducts/pages/ListProducts';
import { Provider } from 'react-redux';
import store from '../src/store';

export default function Home() {
  return (
    <Provider store={store}>
      <ListProduct />
    </Provider>
  );
}
