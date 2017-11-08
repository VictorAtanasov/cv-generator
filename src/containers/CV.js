import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cvActions from '../actions/cvActions';
import CVheader from '../components/CVcomponents/CVheader';
import CVexperienceContainer from '../containers/CVexperienceContainer';
import '../App.css';

class CV extends React.Component{

    constructor(props){
        super(props);

        this.addNewComp = this.addNewComp.bind(this);
    }

    addNewComp(){

    }
    
    render(){
        return(
            <div>
                <div className="CVconainerWrapper">
                    <h2>
                        CV Container
                    </h2>
                    <div className="componentWarpper">
                        <CVheader {...this.props} userInfo={this.props.userInfo} />
                        <CVexperienceContainer userInfo={this.props.userInfo} />
                    </div>
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