import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cvActions from '../actions/cvActions';
import CvHeader from '../components/CVcomponents/CvHeader';
import CvStandartContainer from '../containers/CvStandartContainer';
import CvPhoto from '../components/CVcomponents/CvPhoto';
import CvShortContainer from '../containers/CvShortContainer';
import CvCertificationContainer from '../containers/CvCertificationContainer';
import CvSummaryContainer from '../containers/CvSummaryContainer';
import CvTechnologiesContainer from '../containers/CvTechnologiesContainer';
import CvInputRangeInputContainer from '../containers/CvInputRangeInputContainer';
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
                        <CvHeader {...this.props} userInfo={this.props.userInfo} />
                        <CvPhoto userInfo={this.props.userInfo.userUid} />
                        <div>
                            <h2>
                                Experience
                            </h2>
                            <CvStandartContainer 
                                userInfo={this.props.userInfo}
                                type='experience'
                            />
                        </div>
                        <div>
                            <h2>
                                Projects
                            </h2>
                            <CvStandartContainer 
                                userInfo={this.props.userInfo}
                                type='projects'
                            />
                        </div>
                        <div>
                            <h2>
                                Education
                            </h2>
                            <CvStandartContainer 
                                userInfo={this.props.userInfo}
                                type='education'
                            />
                        </div>
                        <div>
                            <h2>
                                Most Proud of
                            </h2>
                            <CvShortContainer
                                userInfo={this.props.userInfo}
                                type='proud' 
                            />
                        </div>
                        <div>
                            <h2>
                                Strengths
                            </h2>
                            <CvShortContainer
                                userInfo={this.props.userInfo}
                                type='strengths'
                            />
                        </div>
                        <div>
                            <h2>
                                Awards
                            </h2>
                            <CvShortContainer
                                userInfo={this.props.userInfo}
                                type='awards'
                            />
                        </div>
                        <div>
                            <h2>
                                Achievments
                            </h2>
                            <CvShortContainer
                                userInfo={this.props.userInfo}
                                type='achievments'
                            />
                        </div>
                        <div>
                            <h2>
                                Motivation
                            </h2>
                            <CvShortContainer
                                userInfo={this.props.userInfo}
                                type='motivation'
                            />
                        </div>
                        <div>
                            <h2>
                                Certificates
                            </h2>
                            <CvCertificationContainer 
                                userInfo={this.props.userInfo}
                                type='certification'
                            />
                        </div>
                        <div>
                            <h2>
                                Courses
                            </h2>
                            <CvCertificationContainer 
                                userInfo={this.props.userInfo}
                                type='courses'
                            />
                        </div>
                        <div>
                            <h2>
                                Summary
                            </h2>
                            <CvSummaryContainer
                                userInfo={this.props.userInfo}
                            />
                        </div>
                        <div>
                            <h2>
                                Technolgies
                            </h2>
                            <CvTechnologiesContainer 
                                userInfo={this.props.userInfo}
                                type='technologies'
                            />
                        </div>
                        <div>
                            <h2>
                                Expertise
                            </h2>
                            <CvInputRangeInputContainer 
                                userInfo={this.props.userInfo}
                                type='expertise'
                            />
                        </div>
                        <div>
                            <h2>
                                Languages
                            </h2>
                            <CvInputRangeInputContainer 
                                userInfo={this.props.userInfo}
                                type='languages'
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