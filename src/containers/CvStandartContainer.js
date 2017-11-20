import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cvActions from '../actions/cvActions';
import CvStandartComponent from '../components/CVcomponents/CvStandartComponent';
import _ from 'lodash';
import '../App.css';

class CvStandartContainer extends React.Component{
    
        renderComponents(){
            return _.map(this.props.cv.cvData[this.props.type], (comp, key) => {
                return <CvStandartComponent
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


export default connect(mapStateToProps, mapDispatchToProps)(CvStandartContainer)