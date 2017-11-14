import React from 'react';

const InputField = (props) => {
    return(
        <div>
            <input type={props.type} className={props.className} placeholder={props.placeholder} id={props.id} onChange={props.inputAction}/>
        </div>
    )
}

export default InputField;