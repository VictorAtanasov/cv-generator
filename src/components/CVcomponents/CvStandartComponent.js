import React from 'react';
import CvTextarea from '../forms/CvTextarea';
import CvAchievment from './CvAchievment';
import FontAwesomeCvPage from '../FontAwesomeCvPage';
import CvInnerPopOver from './CvInnerPopOver';
import registrationData from '../../Firebase/data';
import Paper from 'material-ui/Paper';
import _ from 'lodash';

export default class CvStandartComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            buttonClass: 'hidden',
            innerComponentOptions: 'hidden',
        }

        this.pushData = this.pushData.bind(this);
        this.renderAchievments = this.renderAchievments.bind(this);
        this.pushAchievmentData = this.pushAchievmentData.bind(this);
        this.setAchievmentData = this.setAchievmentData.bind(this);
        this.deleteExperience = this.deleteExperience.bind(this);
        this.addNewComp = this.addNewComp.bind(this);
        this.hideOptions = this.hideOptions.bind(this);
        this.showOptions = this.showOptions.bind(this);
        this.companyAreaClassName = this.companyAreaClassName.bind(this);
        this.addAchievment = this.addAchievment.bind(this);
        this.showInnerPopOverOptions = this.showInnerPopOverOptions.bind(this);
    }

    pushData(e){
        let userUid = this.props.userInfo.userUid;
        let key = e.target.id;
        let data = e.target.value;
        let componentId = this.props.id;
        this.props.setMultipleComponentData(userUid, this.props.type, componentId, key, data);
    }

    pushAchievmentData(e){
        let userUid = this.props.userInfo.userUid;
        let data = {
            achievment: 'achievment'
        }
        let targetValue = {
            'achievment': e.target.value
        }
        let componentId = this.props.id;
        let key = e.target.id;
        if(e.key === 'Enter'){
            this.props.pushMultipleComponentData(userUid, this.props.type, componentId, 'achievments', data);
            this.props.setMultipleComponentNestedData(userUid, this.props.type, componentId, 'achievments', key, targetValue);
        } else if (e.key === 'Backspace'){
            if(e.target.value === ''){
                this.props.deleteMultipleComponentNestedData(userUid, this.props.type, componentId, 'achievments', key, targetValue);
            }
        }
    }

    addAchievment(){
        let data = {
            achievment: 'achievment'
        };
        this.props.pushMultipleComponentData(this.props.userInfo.userUid, this.props.type, this.props.id, 'achievments', data);
    }

    setAchievmentData(e){
        let userUid = this.props.userInfo.userUid;
        let targetValue = {
            'achievment': e.target.value
        }
        let componentId = this.props.id;
        let key = e.target.id;
        this.props.setMultipleComponentNestedData(userUid, this.props.type, componentId, 'achievments', key, targetValue);
    }

    renderAchievments(){
        return _.map(this.props.cv.cvData[this.props.type][this.props.id].achievments, (achievment, key) => {
            return <CvAchievment 
                        type="text"
                        name={achievment.achievment}
                        placeholder="Your Achievment"
                        onBlur={this.setAchievmentData}
                        onKeyDown={this.pushAchievmentData}
                        className="textarea-sm textarea-default"
                        id={key}
                        font="circle"
                        key={key}
                    />
        })
    }

    deleteExperience(e){
        let userUid = this.props.userInfo.userUid;
        this.props.deleteComponent(userUid, this.props.type, this.props.id)
    }

    addNewComp(){
        var data = {};
        switch(this.props.type){
            case 'experience':
                data = {...registrationData.experience['-KyQi5jtW3WhuV8kdqNW']};
                break;
            case 'projects':
                data = {...registrationData.projects['-KyQi5jtW3WhoV9kdqNZ']};
                break;
            case 'education':
                data = {...registrationData.education['-KyQa2jtW3KhoV9kdqNZ']};
                break;
            default:
                break;
        }
        this.props.pushData(this.props.userInfo.userUid, this.props.type, data)
    }

    showOptions(e){
        this.setState({
            buttonClass: 'active-cv-state',
        })
    }

    hideOptions(e){
        this.setState({
            buttonClass: 'hidden',
            chooceIconButton: 'hidden',
            innerComponentOptions: 'hidden',
        })
    }

    companyAreaClassName(){
        if(this.props.type === 'projects'){
            return 'hidden'
        } else {
            return 'block'
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
                onMouseEnter={this.showOptions}
                onMouseLeave={this.hideOptions}
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
                    <span onClick={this.addAchievment}>
                        <FontAwesomeCvPage font='plus-circle' />
                    </span>
                </Paper>
                <CvInnerPopOver
                        className={this.state.innerComponentOptions}
                        {...this.props}
                        type={this.props.type}
                        id={this.props.id}
                />
                <div>
                    <div>
                        <CvTextarea 
                            type="text"
                            name={data.title}
                            placeholder="Title"
                            onBlur={this.pushData}
                            className="cv-standart-title"
                            id="title"
                            styles={
                                {
                                    color: this.props.cv.cvData.styles['main-color'],
                                    fontFamily: this.props.cv.cvData.styles['font-family']
                                }
                            }
                        />
                    </div>
                    <div className={this.companyAreaClassName()}>
                        <CvTextarea 
                            type="text"
                            name={data.company}
                            placeholder="Company Name"
                            onBlur={this.pushData}
                            className="cv-standart-sub-title textarea-default"
                            id="company"
                            styles={
                                {
                                    color: this.props.cv.cvData.styles['secondary-color'],
                                    fontFamily: this.props.cv.cvData.styles['font-family']
                                }
                            }
                        />
                    </div>
                    <div className={data.config.date === true ? 'inline-textarea-icon-wrapper' : 'hidden'}>
                        <FontAwesomeCvPage font="calendar" />
                        <CvTextarea 
                            type="text"
                            name={data.date}
                            placeholder="Date Period"
                            onBlur={this.pushData}
                            className="inline-textarea-icon textarea-default"
                            id="date"
                        />
                    </div>
                    <div className={data.config.location === true ? 'inline-textarea-icon-wrapper' : 'hidden'}>
                        <FontAwesomeCvPage font="map-marker" />
                        <CvTextarea 
                            type="text"
                            name={data.location}
                            placeholder="location"
                            onBlur={this.pushData}
                            className="inline-textarea-icon textarea-default"
                            id="location"
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
                            placeholder="Company Description"
                            onBlur={this.pushData}
                            className="textarea-sm textarea-default"
                            id="description"
                        />
                    </div>
                    <div className={data.config.bullets === true ? 'block' : 'hidden'}>
                        {this.renderAchievments()}
                    </div>
                </div>
            </div>
        )
    }
}