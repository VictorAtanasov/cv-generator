import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions';

class CV extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                CV Page
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(userActions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(CV)