import React from 'react';
import FontAwesome from 'react-fontawesome';

export const FontAwesomeSpinner = (props) => {
    return(
        <FontAwesome
            name='spinner'
            size='5x'
            spin
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
        />
    )
}