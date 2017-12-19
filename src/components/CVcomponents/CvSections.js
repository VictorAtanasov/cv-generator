import React from 'react';
import componentsData from '../../Firebase/data';
import _ from 'lodash';
import FontAwesomeCvPage from '../FontAwesomeCvPage';
import AuthButton from '../AuthButton';


export default class CvSections extends React.Component{
    constructor(props){
        super(props);

        this.renderComps = this.renderComps.bind(this);

    }

    renderComps(){
        return _.map(componentsData.titles, (title, key) => {
            return  <div key={key}>
                        <FontAwesomeCvPage font={this.props.cv.cvData[key] ? 'star-o' : 'star'} />
                        <span>{title}</span>
                    </div>
        })
    }

    render(){
        return(
            <div>
                {this.renderComps()}
            </div>
        )
    }
}