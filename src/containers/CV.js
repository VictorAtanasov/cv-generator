import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cvActions from '../actions/cvActions';
import CVheader from '../components/CVcomponents/CVheader';
import CVstandartContainer from '../containers/CVstandartContainer';
import CVphoto from '../components/CVcomponents/CVphoto';
import CVshortContainer from '../containers/CVshortContainer';
import CVcertificationContainer from '../containers/CVcertificationContainer';
import CVsummaryContainer from '../containers/CVsummaryContainer';
import CVtechnologiesContainer from '../containers/CVtechnologiesContainer';
import '../App.css';

class CV extends React.Component{
    
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
                                Education
                            </h2>
                            <CVstandartContainer 
                                userInfo={this.props.userInfo}
                                type='education'
                            />
                        </div>
                        <div>
                            <h2>
                                Most Proud of
                            </h2>
                            <CVshortContainer
                                userInfo={this.props.userInfo}
                                type='proud' 
                            />
                        </div>
                        <div>
                            <h2>
                                Strengths
                            </h2>
                            <CVshortContainer
                                userInfo={this.props.userInfo}
                                type='strengths'
                            />
                        </div>
                        <div>
                            <h2>
                                Awards
                            </h2>
                            <CVshortContainer
                                userInfo={this.props.userInfo}
                                type='awards'
                            />
                        </div>
                        <div>
                            <h2>
                                Achievments
                            </h2>
                            <CVshortContainer
                                userInfo={this.props.userInfo}
                                type='achievments'
                            />
                        </div>
                        <div>
                            <h2>
                                Motivation
                            </h2>
                            <CVshortContainer
                                userInfo={this.props.userInfo}
                                type='motivation'
                            />
                        </div>
                        <div>
                            <h2>
                                Certificates
                            </h2>
                            <CVcertificationContainer 
                                userInfo={this.props.userInfo}
                                type='certification'
                            />
                        </div>
                        <div>
                            <h2>
                                Courses
                            </h2>
                            <CVcertificationContainer 
                                userInfo={this.props.userInfo}
                                type='courses'
                            />
                        </div>
                        <div>
                            <h2>
                                Summary
                            </h2>
                            <CVsummaryContainer
                                userInfo={this.props.userInfo}
                            />
                        </div>
                        <div>
                            <h2>
                                Technolgies
                            </h2>
                            <CVtechnologiesContainer 
                                userInfo={this.props.userInfo}
                                type='technologies'
                            />
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