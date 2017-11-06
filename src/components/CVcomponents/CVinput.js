import React from 'react';

const CVinput = (props) => {
    return(
        <div>
            <input type={props.type} 
                className={props.className} 
                placeholder={props.placeholder} 
                id={props.id} 
                onChange={props.inputAction}
                onBlur={props.onBlur}
                />
        </div>
    )
}

export default CVinput;