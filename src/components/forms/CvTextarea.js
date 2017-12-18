import React from 'react';
import TextField from 'material-ui/TextField';

const CvTextarea = (props) => {
    const style = {
        border: 'none'
    }

    const styleFocus = {
        border: '1px solid #54a7d3'
    }
    return(
            <TextField
                hintText={props.placeholder} 
                multiLine={false}
                rows={1}
                rowsMax={1}
                className={props.className}
                id={props.id} 
                onBlur={props.onBlur}
                onFocus={props.onFocus}
                defaultValue={props.name}
                underlineStyle={style}
                underlineFocusStyle={styleFocus}
                inputStyle={props.styles}
            />
    )
}

export default CvTextarea;