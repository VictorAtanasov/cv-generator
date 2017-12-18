import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Container, Row, Col } from 'reactstrap';
import * as cvActions from '../actions/cvActions';
import CvHeader from '../components/CVcomponents/CvHeader';
import CvStandartContainer from '../containers/CvStandartContainer';
import CvShortContainer from '../containers/CvShortContainer';
import CvCertificationContainer from '../containers/CvCertificationContainer';
import CvTechnologiesContainer from '../containers/CvTechnologiesContainer';
import CvInputRangeInputContainer from '../containers/CvInputRangeInputContainer';

class CV extends React.Component{

    constructor(props){
        super(props);

        this.updateTitle = this.updateTitle.bind(this);
    }

    updateTitle(e){
        let data = e.target.value;
        let key = e.target.id;
        this.props.setComponentData(this.props.userInfo.userUid, 'titles', key, data);
    }
    
    render(){
        const data = this.props.cv.cvData.titles;
        return(
            <div className="CVconainerWrapper">
                <div className="componentWarpper">
                    {/* <CvHeader {...this.props} userInfo={this.props.userInfo} /> */}
                    <Container>
                        <Row>
                            <Col xs="7">
                                <div className="page-break" id="experience">
                                    <CvStandartContainer 
                                        userInfo={this.props.userInfo}
                                        type='experience'
                                    />
                                </div>

                                <div className="page-break" id="education">
                                    <CvStandartContainer 
                                        userInfo={this.props.userInfo}
                                        type='education'
                                    />
                                </div>

                                <div className="page-break" id="projects">
                                    <CvStandartContainer 
                                        userInfo={this.props.userInfo}
                                        type='projects'
                                    />
                                </div>

                                <div className="page-break" id="certification">
                                    <CvCertificationContainer 
                                        userInfo={this.props.userInfo}
                                        type='certification'
                                    />
                                </div>

                                <div className="page-break" id="courses">
                                    <CvCertificationContainer 
                                        userInfo={this.props.userInfo}
                                        type='courses'
                                    />
                                </div>

                            </Col>
                            
                            <Col xs="5">
                                <div className="page-break" id="languages">
                                    <CvInputRangeInputContainer 
                                        userInfo={this.props.userInfo}
                                        type='languages'
                                    />
                                </div>

                                <div className="page-break" id="technologies">
                                    <CvTechnologiesContainer 
                                        userInfo={this.props.userInfo}
                                        type='technologies'
                                    />
                                </div>

                                <div className="page-break" id="expertise">
                                    <CvInputRangeInputContainer 
                                        userInfo={this.props.userInfo}
                                        type='expertise'
                                    />
                                </div>

                                <div className="page-break" id="strengths">
                                    <CvShortContainer
                                        userInfo={this.props.userInfo}
                                        type='strengths'
                                    />
                                </div>

                                <div className="page-break" id="achievments">
                                    <CvShortContainer
                                        userInfo={this.props.userInfo}
                                        type='achievments'
                                    />
                                </div>

                                <div className="page-break" id="awards">
                                    <CvShortContainer
                                        userInfo={this.props.userInfo}
                                        type='awards'
                                    />
                                </div>

                                <div className="page-break" id="proud">
                                    <CvShortContainer
                                        userInfo={this.props.userInfo}
                                        type='proud' 
                                    />
                                </div>
                            
                                <div className="page-break" id="motivation">
                                    <CvShortContainer
                                        userInfo={this.props.userInfo}
                                        type='motivation'
                                    />
                                </div>
                                
                            </Col>
                        </Row>
                    </Container>
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