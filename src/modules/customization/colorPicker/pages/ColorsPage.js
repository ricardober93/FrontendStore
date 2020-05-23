import React,{Fragment} from 'react';
import Color from '../components/Color';
import ColorMobile from '../components/ColorMobile';
import {isMobile} from 'react-device-detect';

const ColorsPage = () => {
    return ( 
        <Fragment>
            { isMobile ? <ColorMobile /> : <Color />}
        </Fragment>
     );
}
 
export default ColorsPage;