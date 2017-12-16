import React from 'react';

const CvColorCircle = (props) => {

    return(
        <div 
            className={`color ${props.color1} ${props.color2}`} 
            id = {props.id}
            onClick={props.onClick}
        >
        </div>
    )
}

export default CvColorCircle;