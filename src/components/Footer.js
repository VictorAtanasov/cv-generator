import React from 'react';
import FontAwesome from '../components/FontAwesomeCvPage';

export const Footer = () => {

    return(
        <div className="footer">
            <p>
                <FontAwesome font='copyright' />
                &nbsp;2018
                <span>
                    &nbsp;<a href="https://github.com/VictorAtanasov">Victor Atanasov</a>
                </span>
                &nbsp;| All rights reserved.
            </p>
        </div>
    )
}
