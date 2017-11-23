import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cvActions from '../actions/cvActions';
import CvShortComponent from '../components/CVcomponents/CvShortComponent';
import _ from 'lodash';

class CvShortContainer extends React.Component{
    
        constructor(props){
            super(props);
            
            this.renderComponents = this.renderComponents.bind(this);
        }

        renderComponents(){
            return _.map(this.props.cv.cvData[this.props.type], (comp, key) => {
                return <CvShortComponent 
                            {...this.props}
                            key={key}
                            id={key}
                            type={this.props.type}
                        />
                        
            })
        }
        
        render(){
            return(
                <div>
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


export default connect(mapStateToProps, mapDispatchToProps)(CvShortContainer)