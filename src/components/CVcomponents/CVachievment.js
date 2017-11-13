import React from 'react';
import FontAwesomeCVPage from '../FontAwesomeCVPage';

const CVachievment = (props) => {
    return(
        <div className="cv-header-input-wrapper">
            <FontAwesomeCVPage font={props.font} />
            <input type={props.type} 
                className={props.className} 
                placeholder={props.placeholder} 
                id={props.id} 
                onBlur={props.onBlur}
                onKeyDown={props.onKeyDown}
                defaultValue={props.name}
                spellCheck="false"
            />
        </div>
    )
}

export default CVachievment;