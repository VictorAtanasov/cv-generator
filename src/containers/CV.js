import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cvActions from '../actions/cvActions';
import CVheader from '../components/CVcomponents/CVheader';

class CV extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h2>
                    CV Container
                </h2>
                <div>
                    <CVheader {...this.props} userInfo={this.props.userInfo} />
                </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(CV)