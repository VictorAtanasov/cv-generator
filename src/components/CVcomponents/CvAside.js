import React from 'react';
import {findDOMNode} from 'react-dom';


export default class CvAside extends React.Component{
    constructor(props){
        super(props);

        this.changeColors = this.changeColors.bind(this);
    }

    changeColors(){
        this.props.setComponentData(this.props.user, 'styles', 'secondary-color', 'green')
    }

    render(){
        return(
            <div>
                <button onClick={this.changeColors}>Change Colors</button>
            </div>
        )
    }
}