
import PanelCustomization from '../src/modules/customization/pages/PanelCustomization'
import { Provider } from 'react-redux';
import store from '../src/store';


function customization() {

return (
    <Provider store={store}>
        <PanelCustomization />
    </Provider>
    )
}

export default customization
