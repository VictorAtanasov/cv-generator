import React from 'react';

const AuthButton = (props) => {
    return(
        <div>
            <button className={props.className} type={props.type} onClick={props.onClick}>
                {props.text}
            </button>
        </div>
    )
}

export default AuthButton;