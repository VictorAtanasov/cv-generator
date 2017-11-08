import React from 'react';
import FontAwesomeCVPage from '../FontAwesomeCVPage';

const Test = (props) => {
    return(
        <div className="cv-header-input-wrapper">
            <textarea type={props.type} 
                className={props.className} 
                placeholder={props.placeholder} 
                id={props.id} 
                onChange={props.inputAction}
                onBlur={props.onBlur}
                defaultValue={props.name}
                spellCheck="false"
            />
        </div>
    )
}

export default Test;