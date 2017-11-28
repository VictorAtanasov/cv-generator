import React from 'react';

const InputField = (props) => {
    return(
        
            <input type={props.type} className={props.className} placeholder={props.placeholder} id={props.id} onChange={props.inputAction}/>
        
    )
}

export default InputField;