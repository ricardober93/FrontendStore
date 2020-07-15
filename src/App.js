import React from 'react';
//import NotFound from "./modules/layouts/NotFound";
//import PrivateRoute from './PrivateRoute';
 import {routes} from './routes'
//Redux
import { Provider } from 'react-redux';
import store from './store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Provider store={store} >
            <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.component />}
              />
            ))}
              {/* <Route component={NotFound} /> */}
            </Switch>
        </Provider>
      </Router>
    </div>
  );
}
export default App;