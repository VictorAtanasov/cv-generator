import React from 'react';

const CvTextAreaTitle = (props) => {
    return(
            <textarea 
                type={props.type} 
                className={props.className} 
                placeholder={props.placeholder} 
                id={props.id} 
                onBlur={props.onBlur}
                defaultValue={props.name}
                spellCheck="false"
                style={props.color}
            />
    )
}

export default CvTextAreaTitle;