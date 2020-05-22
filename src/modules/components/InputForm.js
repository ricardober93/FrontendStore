import React  from 'react';
import PropTypes from 'prop-types';

import Input from "@material-ui/core/Input";

 const InputForm = ({id, type, name, onChange, onBlur, value}) => {
    return (
        <div>
             <Input 
                type={type? type : 'text'}
                id={ id ? id : name} 
                name={name} 
                onChange={ onChange } 
                onBlur={ onBlur } 
                value={value}
                />
        </div>
    )
}


InputForm.propTypes = {
    type:PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur:PropTypes.func.isRequired,
    value:PropTypes.string.isRequired
}

export default InputForm;

