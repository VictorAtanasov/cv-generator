import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cvActions from '../actions/cvActions';
import CvInputRangeComponent from '../components/CVcomponents/CvInputRangeComponent';
import CvTextarea from '../components/forms/CvTextarea';
import _ from 'lodash';

class CvInputRangeInputContainer extends React.Component{
    
    constructor(props){
        super(props);
        
        this.renderComponents = this.renderComponents.bind(this);
        this.updateTitle = this.updateTitle.bind(this);        
    }

    renderComponents(){
        return _.map(this.props.cv.cvData[this.props.type], (comp, key) => {
            return <CvInputRangeComponent 
                        {...this.props}
                        key={key}
                        id={key}
                        type={this.props.type}
                    />
                    
        })
    }
    
    updateTitle(e){
        let data = e.target.value;
        let key = e.target.id;
        this.props.setComponentData(this.props.userInfo.userUid, 'titles', key, data);
    }

    render(){
        const data = this.props.cv.cvData.titles;
        return(
            <div className="input-range-wrapper">
                <div>
                    <CvTextarea 
                        type="text"
                        name={data[this.props.type]}
                        placeholder="Title"
                        onBlur={this.updateTitle}
                        className="textarea-component-title"
                        id={this.props.type}
                        styles={
                            {
                                color: this.props.cv.cvData.styles['main-color'],
                                fontFamily: this.props.cv.cvData.styles['font-family']
                            }
                        }
                    />
                </div>
                {this.renderComponents()}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        cv: state.cv
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(cvActions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(CvInputRangeInputContainer)