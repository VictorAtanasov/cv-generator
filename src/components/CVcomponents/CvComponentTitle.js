import React from 'react';
import CvTextarea from '../forms/CvTextarea.js';

export default class CvComponentTitle extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        const data = this.props.cv.cvData.titles;
        return(
            <h2>
                <CvTextarea 
                    type={this.props.type}
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    onBlur={this.props.onBlur}
                    className={this.props.className}
                    id={this.props.id}
                />
            </h2>
        )
    }
}