import React from 'react';
import Layout from './modules/layouts/Layout';
//import NotFound from "./modules/layouts/NotFound";
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import Signin from "./modules/user/auth/components/SingIn";
import Cart from "./modules/market/cart/pages/Cart";
import PanelCustomization from "./modules/customization/pages/PanelCustomization";
import ListProduct from "./modules/market/products/pages/ListProducts";
import OverView from "./modules/market/dashboard/pages/OverView";
import CreateProduct from "./modules/market/dashboard/pages/CreateProduct";
import ProductAdmin from "./modules/market/dashboard/pages/ProductAdmin";
import ShippingAdmin from "./modules/market/dashboard/pages/ShippingAdmin";
import FormLogin from "./modules/user/auth/components/FormLogin";
import Profile from "./modules/user/profile/components/Profile";
import Recovery from "./modules/user/recovery/components/Recovery";
import ProductDetail from "./modules/market/products/pages/ProductDetail";
import CartHistoryUser from './modules/market/cart/pages/CartHistoryUser';

//Context
import firebase, { FirebaseContext } from "./firebase";

//Redux
import { Provider } from 'react-redux';
import store from './store';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CreateCategoty from './modules/market/crud-category/pages/CreateCategoty';

function App() {

  return (
    <div>
      <Router>
        <FirebaseContext.Provider
          value={{
            firebase,
          }}
        >
          <Provider store={store} >
            <Layout >
              <Switch>
                <Route exact path='/' component={ListProduct} />
                <Route exact path='/login' component={FormLogin} />
                <Route exact path='/signin' component={Signin} />
                <Route exact path='/restore' component={Recovery} />
                <PrivateRoute exact path='/profile' component={Profile} />
                <Route exact path='/cart' component={Cart} />
                <AdminRoute exact path='/customization' component={PanelCustomization} />
                <PrivateRoute exact path='/dashboard' component={OverView} />
                <PrivateRoute exact path='/dashboard-create-product' component={CreateProduct} />
                <PrivateRoute exact path='/dashboard-product' component={ProductAdmin} />
                <PrivateRoute exact path='/dashboard-shipping' component={ShippingAdmin} />
                <Route exact path='/product/:id' component={ProductDetail} />
                <PrivateRoute exact path='/dashboard-create-category' component={CreateCategoty} />
                <PrivateRoute exact path='/cart-history' component={CartHistoryUser} />

                {/* <Route component={NotFound} /> */}
              </Switch>
            </Layout>
          </Provider>
        </FirebaseContext.Provider>
      </Router>
    </div>
  );
}
export default App;