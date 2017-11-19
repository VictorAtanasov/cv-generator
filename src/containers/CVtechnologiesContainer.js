import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cvActions from '../actions/cvActions';
import CVtechnologiesComponent from '../components/CVcomponents/CVtechnologiesComponent';
import _ from 'lodash';
import '../App.css';

class CVtechnologiesContainer extends React.Component{
    
        renderComponents(){
            return _.map(this.props.cv.cvData[this.props.type], (comp, key) => {
                return <CVtechnologiesComponent
                            {...this.props}
                            userInfo={this.props.userInfo} 
                            key = {key}
                            id = {key}
                            type = {this.props.type}
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


export default connect(mapStateToProps, mapDispatchToProps)(CVtechnologiesContainer)