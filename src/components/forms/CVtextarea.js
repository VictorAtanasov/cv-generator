import React from 'react';

const CVtextarea = (props) => {
    return(
        <div className="cv-header-input-wrapper">
            <textarea type={props.type} 
                className={props.className} 
                placeholder={props.placeholder} 
                id={props.id} 
                onBlur={props.onBlur}
                defaultValue={props.name}
                spellCheck="false"
            />
        </div>
    )
}

export default CVtextarea;