import React from 'react';
import FontAwesome from 'react-fontawesome';

const FontAwesomeCvPage = (props) => {
    return(
        <FontAwesome
            name={props.font}
            className={props.className}
            style={props.color}
        />
    )
}

export default FontAwesomeCvPage