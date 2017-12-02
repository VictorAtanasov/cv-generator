import React from 'react';
import FontAwesomeCvPage from '../FontAwesomeCvPage';
import TextField from 'material-ui/TextField';

const CvAchievment = (props) => {
    const style = {
        border: 'none'
    }

    const styleFocus = {
        border: '1px solid #54a7d3'
    }
    return(
        <div className="cv-achievment-wrapper">
            <FontAwesomeCvPage font={props.font} />
            <TextField 
                type={props.type} 
                className={props.className} 
                placeholder={props.placeholder} 
                id={props.id} 
                onBlur={props.onBlur}
                onKeyDown={props.onKeyDown}
                defaultValue={props.name}
                spellCheck="false"
                underlineStyle={style}
                underlineFocusStyle={styleFocus}
            />
        </div>
    )
}

export default CvAchievment;