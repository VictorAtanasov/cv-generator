import React from 'react';

const AuthButton = (props) => {
    return(
        <div>
            <button className={props.className} type={props.type}>
                {props.text}
            </button>
        </div>
    )
}

export default AuthButton;