import React from 'react';
import FontAwesomeCvPage from '../FontAwesomeCvPage';

const CvAchievment = (props) => {
    return(
        <div className="cv-header-input-wrapper">
            <FontAwesomeCvPage font={props.font} />
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

export default CvAchievment;