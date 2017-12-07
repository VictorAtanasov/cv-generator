import React from 'react';

const CvTechnologiesTextarea = (props) => {

    return(
            <div className="cv-texhnologies-wrapper">
                <input 
                    className={props.className} 
                    placeholder={props.placeholder}
                    id={props.id} 
                    onBlur={props.onBlur}
                    //onKeyDown={props.onKeyDown}
                    defaultValue={props.name}
                    spellCheck="false"
                /> 
            </div>
    )
}

export default CvTechnologiesTextarea;