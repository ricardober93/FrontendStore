import { Provider } from "react-redux";
import store from "../src/store";
import OverView from "../src/modules/market/dashboard/pages/OverView";

export default function dashboard() {
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
      <OverView />
    </Provider>
  );
}
