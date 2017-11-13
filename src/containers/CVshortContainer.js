import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cvActions from '../actions/cvActions';
import CVshortComponent from '../components/CVcomponents/CVshortComponent';
import '../App.css';

class CVshortContainer extends React.Component{
    
        constructor(props){
            super(props);
            
        }
        
        render(){
            return(
                <div>
                    <span>
                        hahehihp
                    </span>
                    <div>
                        <CVshortComponent />
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


export default connect(mapStateToProps, mapDispatchToProps)(CVshortContainer)