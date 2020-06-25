import { Provider } from "react-redux";
import store from "../src/store";
import OverView from "../src/modules/dashboard/overview/OverView";

export default function dashboard() {
    return (
        <Provider store={store}>
      <OverView />
    </Provider>
    )
}
