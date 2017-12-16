import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Container, Row, Col } from 'reactstrap';
import * as cvActions from '../actions/cvActions';
import CvHeader from '../components/CVcomponents/CvHeader';
import CvStandartContainer from '../containers/CvStandartContainer';
import CvShortContainer from '../containers/CvShortContainer';
import CvCertificationContainer from '../containers/CvCertificationContainer';
import CvSummaryContainer from '../containers/CvSummaryContainer';
import CvTechnologiesContainer from '../containers/CvTechnologiesContainer';
import CvInputRangeInputContainer from '../containers/CvInputRangeInputContainer';
import CvTextarea from '../components/forms/CvTextarea';

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
                    <CvHeader {...this.props} userInfo={this.props.userInfo} />
                    <Container>
                        <Row>
                            <Col xs="7">
                               <div>
                                    <CvTextarea 
                                        type="text"
                                        name={data.experience}
                                        placeholder="Title"
                                        onBlur={this.updateTitle}
                                        className="textarea-component-title"
                                        id='experience'
                                        styles={
                                            {
                                                color: this.props.cv.cvData.styles['main-color'],
                                                fontFamily: this.props.cv.cvData.styles['font-family']
                                            }
                                        }
                                    />
                                </div>
                                <CvStandartContainer 
                                    userInfo={this.props.userInfo}
                                    type='experience'
                                />

                                <div>
                                    <CvTextarea 
                                        type="text"
                                        name={data.education}
                                        placeholder="Title"
                                        onBlur={this.updateTitle}
                                        className="textarea-component-title"
                                        id='education'
                                        styles={
                                            {
                                                color: this.props.cv.cvData.styles['main-color'],
                                                fontFamily: this.props.cv.cvData.styles['font-family']
                                            }
                                        }
                                    />
                                </div>
                                <CvStandartContainer 
                                    userInfo={this.props.userInfo}
                                    type='education'
                                />

                                <div>
                                    <CvTextarea 
                                        type="text"
                                        name={data.projects}
                                        placeholder="Title"
                                        onBlur={this.updateTitle}
                                        className="textarea-component-title"
                                        id='projects'
                                        styles={
                                            {
                                                color: this.props.cv.cvData.styles['main-color'],
                                                fontFamily: this.props.cv.cvData.styles['font-family']
                                            }
                                        }
                                    />
                                </div>
                                <CvStandartContainer 
                                    userInfo={this.props.userInfo}
                                    type='projects'
                                />

                                <div>
                                    <CvTextarea 
                                        type="text"
                                        name={data.certification}
                                        placeholder="Title"
                                        onBlur={this.updateTitle}
                                        className="textarea-component-title"
                                        id='certification'
                                        styles={
                                            {
                                                color: this.props.cv.cvData.styles['main-color'],
                                                fontFamily: this.props.cv.cvData.styles['font-family']
                                            }
                                        }
                                    />
                                </div>
                                <CvCertificationContainer 
                                    userInfo={this.props.userInfo}
                                    type='certification'
                                />

                                <div>
                                    <CvTextarea 
                                        type="text"
                                        name={data.courses}
                                        placeholder="Title"
                                        onBlur={this.updateTitle}
                                        className="textarea-component-title"
                                        id='courses'
                                        styles={
                                            {
                                                color: this.props.cv.cvData.styles['main-color'],
                                                fontFamily: this.props.cv.cvData.styles['font-family']
                                            }
                                        }
                                    />
                                </div>
                                <CvCertificationContainer 
                                    userInfo={this.props.userInfo}
                                    type='courses'
                                />

                                {/* <div>
                                    <CvTextarea 
                                        type="text"
                                        name={data.summary}
                                        placeholder="Title"
                                        onBlur={this.updateTitle}
                                        className="textarea-component-title"
                                        id='summary'
                                    />
                                </div>
                                <CvSummaryContainer
                                    userInfo={this.props.userInfo}
                                /> */}
                            </Col>
                            
                            <Col xs="5">
                                <div>
                                    <CvTextarea 
                                        type="text"
                                        name={data.languages}
                                        placeholder="Title"
                                        onBlur={this.updateTitle}
                                        className="textarea-component-title"
                                        id='languages'
                                        styles={
                                            {
                                                color: this.props.cv.cvData.styles['main-color'],
                                                fontFamily: this.props.cv.cvData.styles['font-family']
                                            }
                                        }
                                    />
                                </div>
                                <CvInputRangeInputContainer 
                                    userInfo={this.props.userInfo}
                                    type='languages'
                                />

                                <div>
                                    <CvTextarea 
                                        type="text"
                                        name={data.technologies}
                                        placeholder="Title"
                                        onBlur={this.updateTitle}
                                        className="textarea-component-title"
                                        id='technologies'
                                        styles={
                                            {
                                                color: this.props.cv.cvData.styles['main-color'],
                                                fontFamily: this.props.cv.cvData.styles['font-family']
                                            }
                                        }
                                    />
                                </div>
                                <CvTechnologiesContainer 
                                    userInfo={this.props.userInfo}
                                    type='technologies'
                                />

                                <div>
                                    <CvTextarea 
                                        type="text"
                                        name={data.expertise}
                                        placeholder="Title"
                                        onBlur={this.updateTitle}
                                        className="textarea-component-title"
                                        id='expertise'
                                        styles={
                                            {
                                                color: this.props.cv.cvData.styles['main-color'],
                                                fontFamily: this.props.cv.cvData.styles['font-family']
                                            }
                                        }
                                    />
                                </div>
                                <CvInputRangeInputContainer 
                                    userInfo={this.props.userInfo}
                                    type='expertise'
                                />

                                <div>
                                    <CvTextarea 
                                        type="text"
                                        name={data.strengths}
                                        placeholder="Title"
                                        onBlur={this.updateTitle}
                                        className="textarea-component-title"
                                        id='strengths'
                                        styles={
                                            {
                                                color: this.props.cv.cvData.styles['main-color'],
                                                fontFamily: this.props.cv.cvData.styles['font-family']
                                            }
                                        }
                                    />
                                </div>
                                <CvShortContainer
                                    userInfo={this.props.userInfo}
                                    type='strengths'
                                />

                                <div>
                                    <CvTextarea 
                                        type="text"
                                        name={data.achievments}
                                        placeholder="Title"
                                        onBlur={this.updateTitle}
                                        className="textarea-component-title"
                                        id='achievments'
                                        styles={
                                            {
                                                color: this.props.cv.cvData.styles['main-color'],
                                                fontFamily: this.props.cv.cvData.styles['font-family']
                                            }
                                        }
                                    />
                                </div>
                                <CvShortContainer
                                    userInfo={this.props.userInfo}
                                    type='achievments'
                                />
                            
                                <div>
                                    <CvTextarea 
                                        type="text"
                                        name={data.awards}
                                        placeholder="Title"
                                        onBlur={this.updateTitle}
                                        className="textarea-component-title"
                                        id='awards'
                                        styles={
                                            {
                                                color: this.props.cv.cvData.styles['main-color'],
                                                fontFamily: this.props.cv.cvData.styles['font-family']
                                            }
                                        }
                                    />
                                </div>
                                <CvShortContainer
                                    userInfo={this.props.userInfo}
                                    type='awards'
                                />
                            
                                <div>
                                    <CvTextarea 
                                        type="text"
                                        name={data.proud}
                                        placeholder="Title"
                                        onBlur={this.updateTitle}
                                        className="textarea-component-title"
                                        id='proud'
                                        styles={
                                            {
                                                color: this.props.cv.cvData.styles['main-color'],
                                                fontFamily: this.props.cv.cvData.styles['font-family']
                                            }
                                        }
                                    />
                                </div>
                                <CvShortContainer
                                    userInfo={this.props.userInfo}
                                    type='proud' 
                                />
                            
                                <div>
                                    <CvTextarea 
                                        type="text"
                                        name={data.motivation}
                                        placeholder="Title"
                                        onBlur={this.updateTitle}
                                        className="textarea-component-title"
                                        id='motivation'
                                        styles={
                                            {
                                                color: this.props.cv.cvData.styles['main-color'],
                                                fontFamily: this.props.cv.cvData.styles['font-family']
                                            }
                                        }
                                    />
                                </div>
                                <CvShortContainer
                                    userInfo={this.props.userInfo}
                                    type='motivation'
                                />
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