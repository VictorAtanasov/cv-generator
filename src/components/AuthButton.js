import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const AuthButton = (props) => {
    return(
        <div>
            <RaisedButton color={props.color} type={props.type} onClick={props.onClick} label={props.text} />
        </div>
    )
}

export default AuthButton;