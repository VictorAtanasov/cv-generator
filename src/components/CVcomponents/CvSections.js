import React from 'react';
import componentsData from '../../Firebase/data';
import _ from 'lodash';
import FontAwesomeCvPage from '../FontAwesomeCvPage';
import data from '../../Firebase/data';



export default class CvSections extends React.Component{
    constructor(props){
        super(props);

        this.renderComps = this.renderComps.bind(this);
        this.addComp = this.addComp.bind(this);
    }

    addComp(ev){
        let compData = {
            components: data[ev.target.id].components,
            title: data[ev.target.id].title
        };
        this.props.createSection(this.props.user, ev.target.id, compData)
    }

    renderComps(){
        
        return _.map(componentsData.titles, (title, key) => {
            return  <div key={key}>
                        <FontAwesomeCvPage font={this.props.cv.cvData[key] ? 'star-o' : 'star'} />
                        <span onClick={this.addComp} id={key}>{title}</span>
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