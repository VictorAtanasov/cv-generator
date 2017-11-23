import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cvActions from '../actions/cvActions';
import CvSummaryComponent from '../components/CVcomponents/CvSummaryComponent';

class CvSummaryContainer extends React.Component{
        
        render(){
            return(
                <div>
                    <CvSummaryComponent {...this.props} />
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


export default connect(mapStateToProps, mapDispatchToProps)(CvSummaryContainer)