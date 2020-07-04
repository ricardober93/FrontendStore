import React from "react";
import PropTypes from "prop-types";

import Input from "@material-ui/core/Input";

 const InputForm = ({id, type, name, onChange, onBlur, value , placeholder}) => {
    return (
        <div>
             <Input 
                style={{ marginTop: 20 }} 
                fullWidth="true"
                label= {name ? name : null}
                type={type ? type : 'text'}
                id={ id ? id : name} 
                name={name} 
                onChange={ onChange } 
                onBlur={ onBlur } 
                value={value}
                placeholder={placeholder? placeholder : null}
                />
        </div>
    )
}


InputForm.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  variant: PropTypes.string,
  placeholder: PropTypes.string
};

export default InputForm;
