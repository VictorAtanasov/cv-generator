import React from 'react';
import { Button } from 'reactstrap';

const AuthButton = (props) => {
    return(
        <div>
            <Button color={props.color} type={props.type} onClick={props.onClick}>
                {props.text}
            </Button>
        </div>
    )
}

export default AuthButton;