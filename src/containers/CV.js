import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cvActions from '../actions/cvActions';
import CVheader from '../components/CVcomponents/CVheader';
import CVstandartContainer from '../containers/CVstandartContainer';
import CVphoto from '../components/CVcomponents/CVphoto';
import CVshortContainer from '../containers/CVshortContainer';
import '../App.css';

class CV extends React.Component{

    constructor(props){
        super(props);
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
                        <CVphoto userInfo={this.props.userInfo.userUid} />
                        <div>
                            <h2>
                                Experience
                            </h2>
                            <CVstandartContainer 
                                userInfo={this.props.userInfo}
                                type='experience'
                            />
                        </div>
                        <div>
                            <h2>
                                Projects
                            </h2>
                            <CVstandartContainer 
                                userInfo={this.props.userInfo}
                                type='projects'
                            />
                        </div>
                        <div>
                            <h2>
                                Mpost Proud of
                            </h2>
                            <CVshortContainer />
                        </div>
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