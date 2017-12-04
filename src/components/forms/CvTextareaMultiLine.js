import React from 'react';
import TextField from 'material-ui/TextField';

const CvTextareaMultiLine = (props) => {

    return(
            <textarea
                placeholder={props.placeholder} 
                className={props.className}
                id={props.id} 
                onBlur={props.onBlur}
                defaultValue={props.name}
            />
    )
}

export default CvTextareaMultiLine;