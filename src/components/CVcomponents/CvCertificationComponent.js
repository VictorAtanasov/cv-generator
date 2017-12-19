import React from 'react';
import FontAwesomeCvPage from '../FontAwesomeCvPage';
import CvTextarea from '../forms/CvTextarea';
import registrationData from '../../Firebase/data';
import {Paper} from 'material-ui';
import CvInnerPopOver from './CvInnerPopOver';

export default class CvCertificationComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            buttonClass: 'hidden',
            chooceIconButton: 'hidden',
            innerComponentOptions: 'hidden',
        }

        this.pushData = this.pushData.bind(this);
        this.deleteExperience = this.deleteExperience.bind(this);
        this.addNewComp = this.addNewComp.bind(this);
        this.showInnerPopOverOptions = this.showInnerPopOverOptions.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);           
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    pushData(e){
        let userUid = this.props.userInfo.userUid;
        let key = e.target.id;
        let data = e.target.value;
        let componentId = this.props.id;
        this.props.setMultipleComponentData(userUid, this.props.type, componentId, key, data);
    }

    deleteExperience(e){
        let userUid = this.props.userInfo.userUid;
        this.props.deleteComponent(userUid, this.props.type, this.props.id)
    }

    addNewComp(){
        var data = {};
        switch(this.props.type){
            case 'e-certification':
                data = {...registrationData['e-certification']['-KyQi5jtW3WhaV9kdqNA']};
                break;
            case 'd-courses':
                data = {...registrationData['d-courses']['-KyQi5jtW3WhaV9kdqNA']};
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
                innerComponentOptions: 'hidden'
            })
        } else{
            this.setState({
                buttonClass: 'active-cv-state',
            })
        }
    }

    showInnerPopOverOptions(){
        if(this.state.innerComponentOptions === 'hidden'){
            this.setState({
                innerComponentOptions: 'innerPopOver'
            })
        } else{
            this.setState({
                innerComponentOptions: 'hidden'
            })
        }
    }

    render(){
        const data = this.props.cv.cvData[this.props.type][this.props.id];
        return(
            <div 
                className="experienceWarpper" 
                ref={this.setWrapperRef}
            >
                <Paper 
                    zDepth={1}
                    className={`${this.state.buttonClass} componentOptionsPopOver`}
                >
                    <span onClick={this.deleteExperience}>
                        <FontAwesomeCvPage font="trash" />
                    </span>
                    <span onClick={this.addNewComp}>
                        <FontAwesomeCvPage font="plus" />
                    </span>
                    <span onClick={this.showInnerPopOverOptions}>
                        <FontAwesomeCvPage font='cog' />
                    </span>
                </Paper>
                <CvInnerPopOver
                        className={this.state.innerComponentOptions}
                        {...this.props}
                        type={this.props.type}
                        id={this.props.id}
                />
                <div>
                    <CvTextarea 
                        type="text"
                        name={data.certificate}
                        placeholder="Certificate"
                        className="cv-standart-title"
                        id="certificate"
                        onBlur={this.pushData}
                    />
                </div>
                <div className={data.config.organization === true ? 'block' : 'hidden'}>
                    <CvTextarea 
                        type="text"
                        name={data.organization}
                        placeholder="Description"
                        className="textarea-sm cv-standart-title"
                        id="organization"
                        onBlur={this.pushData}
                    />
                </div>
                <div className={data.config.link === true ? 'block' : 'hidden'}>
                    <FontAwesomeCvPage font="link" />
                    <CvTextarea 
                        type="text"
                        name={data.link}
                        placeholder="link"
                        onBlur={this.pushData}
                        className="block-textarea-icon textarea-default"
                        id="link"
                    />
                </div>
                <div className={data.config.description === true ? 'block' : 'hidden'}>
                    <CvTextarea 
                        type="text"
                        name={data.description}
                        placeholder="Description"
                        className="textarea-sm cv-standart-title"
                        id="description"
                        onBlur={this.pushData}
                    />
                </div>
            </div>
        )
    }
}