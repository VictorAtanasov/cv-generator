import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cvActions from '../actions/cvActions';
import CvShortComponent from '../components/CVcomponents/CvShortComponent';
import CvTextarea from '../components/forms/CvTextarea';
import Paper from 'material-ui/Paper';
import registrationData from '../Firebase/data';
import FontAwesomeCvPage from '../components/FontAwesomeCvPage';
import _ from 'lodash';

class CvShortContainer extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            buttonClass: 'hidden',
        }

        this.renderComponents = this.renderComponents.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.addNewComp = this.addNewComp.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);           
        this.handleClickOutside = this.handleClickOutside.bind(this);     
    }

    renderComponents(){
        return _.map(this.props.cv.cvData[this.props.type], (comp, key) => {
            return <CvShortComponent 
                        {...this.props}
                        key={key}
                        id={key}
                        type={this.props.type}
                    />
                    
        })
    }

    updateTitle(e){
        let data = e.target.value;
        let key = e.target.id;
        this.props.setComponentData(this.props.userInfo.userUid, 'titles', key, data);
    }

    addNewComp(){
        var data = {};
        switch(this.props.type){
            case 'j-proud':
                data = {...registrationData['j-proud']['-KyQi5jtW3WhaV9kdqNW']};
                break;
            case 'i-strengths':
                data = {...registrationData['i-strengths']['-KyQi5jtW3WhaV9kdqNW']};
                break;
            case 'l-awards':
                data = {...registrationData['l-awards']['-KyQi5jtW3WhaV9kdqNW']};
                break;
            case 'm-achievments':
                data = {...registrationData['m-achievments']['-KyQi5jtA2WhaV9kdqNW']};
                break;
            case 'k-motivation':
                data = {...registrationData['k-motivation']['-KyQy1jtWdWhqV9kdqNW']};
                break;
            default:
                break;
        }

        this.props.pushData(this.props.userInfo.userUid, this.props.type, data)
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({
                buttonClass: 'hidden',
            })
        } else{
            this.setState({
                buttonClass: 'active-cv-state',
            })
        }
    }
    
    render(){
        const data = this.props.cv.cvData.titles;
        return(
            <div>
                <div ref={this.setWrapperRef}>
                    <Paper 
                        zDepth={1}
                        className={`${this.state.buttonClass} componentOptionsPopOverRightTitle`}
                    >
                        <span onClick={this.deleteExperience}>
                            <FontAwesomeCvPage font="trash" />
                        </span>
                        <span onClick={this.addNewComp}>
                            <FontAwesomeCvPage font="plus" />
                        </span>
                    </Paper>
                    <div>
                        <CvTextarea 
                            type="text"
                            name={data[this.props.type]}
                            placeholder="Title"
                            onBlur={this.updateTitle}
                            className="textarea-component-title"
                            id={this.props.type}
                            styles={
                                {
                                    color: this.props.cv.cvData.styles['main-color'],
                                    fontFamily: this.props.cv.cvData.styles['font-family']
                                }
                            }
                        />
                    </div>
                </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(CvShortContainer)