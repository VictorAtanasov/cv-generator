import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cvActions from '../actions/cvActions';
import CVsummaryComponent from '../components/CVcomponents/CVsummaryComponent';
import '../App.css';

class CVsummaryContainer extends React.Component{
        
        render(){
            return(
                <div>
                    <CVsummaryComponent {...this.props} />
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


export default connect(mapStateToProps, mapDispatchToProps)(CVsummaryContainer)