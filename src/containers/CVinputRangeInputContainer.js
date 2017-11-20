import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cvActions from '../actions/cvActions';
import CVinputRangeComponent from '../components/CVcomponents/CVinputRangeComponent';
import _ from 'lodash';
import '../App.css';

class CVinputRangeInputContainer extends React.Component{
    
        constructor(props){
            super(props);
            
            this.renderComponents = this.renderComponents.bind(this);
        }

        renderComponents(){
            return _.map(this.props.cv.cvData[this.props.type], (comp, key) => {
                return <CVinputRangeComponent 
                            {...this.props}
                            key={key}
                            id={key}
                            type={this.props.type}
                        />
                        
            })
        }
        
        render(){
            return(
                <div className="experienceWarpper">
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


export default connect(mapStateToProps, mapDispatchToProps)(CVinputRangeInputContainer)