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
import CvTitles from '../components/CVcomponents/CvTitles';
import _ from 'lodash';

class CV extends React.Component{

    constructor(props){
        super(props);

        this.renderLeftComponents = this.renderLeftComponents.bind(this);
        this.renderRightComponents = this.renderRightComponents.bind(this);
    }

    renderLeftComponents(){
        var iterator = 1;
        return _.map(this.props.cv.cvData, (comp, key) => {
            switch(key){
                case 'a-experience':
                case 'b-education':
                case 'c-projects':
                    iterator += 1;
                    return  <div className="page-break" id={key} key={iterator}>
                                <CvTitles 
                                    {...this.props}
                                    type={key}
                                />
                                <CvStandartContainer 
                                    userInfo={this.props.userInfo}
                                    type={key}
                                />
                            </div>
                    break;
                case 'e-certification':
                case 'd-courses':
                    iterator += 1;
                    return <div className="page-break" id={key} key={iterator}>
                                <CvTitles 
                                    {...this.props}
                                    type={key}
                                />
                                <CvCertificationContainer 
                                    userInfo={this.props.userInfo}
                                    type={key}
                                />
                            </div>
                    break;
                default:
                    break;
            }
        })
    }

    renderRightComponents(){
        var iterator = 30;
        return _.map(this.props.cv.cvData, (comp, key) => {
            switch(key){
                case 'f-technologies':
                    iterator += 1;
                    return <div className="page-break" id={key} key={iterator}>
                                <CvTitles 
                                    {...this.props}
                                    type={key}
                                />
                                <CvTechnologiesContainer 
                                    userInfo={this.props.userInfo}
                                    type={key}
                                />
                            </div>
                    break;
                case 'g-expertise':
                case 'h-languages':
                    iterator += 1;
                    return <div className="page-break" id={key} key={iterator}>
                                <CvTitles 
                                    {...this.props}
                                    type={key}
                                />
                                <CvInputRangeInputContainer 
                                    userInfo={this.props.userInfo}
                                    type={key}
                                />
                            </div>
                    break;
                case 'i-strengths':
                case 'j-proud':
                case 'k-motivation':
                case 'l-awards':
                case 'm-achievments':
                    iterator += 1;
                    return <div className="page-break" id={key} key={iterator}>
                                <CvTitles 
                                    {...this.props}
                                    type={key}
                                />
                                <CvShortContainer 
                                    userInfo={this.props.userInfo}
                                    type={key}
                                />
                            </div>
                    break;
                default:
                    break;
            }
        })
    }
    
    render(){
        return(
            <div className="CVconainerWrapper">
                <div className="componentWarpper">
                    {/* <CvHeader {...this.props} userInfo={this.props.userInfo} /> */}
                    <Container>
                        <Row>
                            <Col xs="7">
                                {this.renderLeftComponents()}
                            </Col>
                            <Col xs="5">
                                {this.renderRightComponents()}
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