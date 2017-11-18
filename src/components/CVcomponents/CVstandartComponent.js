import React from 'react';
import CVtextarea from '../forms/CVtextarea';
import CVachievment from './CVachievment';
import FontAwesomeCVPage from '../FontAwesomeCVPage';
import _ from 'lodash';
import '../../App.css';

export default class CVstandartComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            buttonClass: 'hidden'
        }

        this.pushData = this.pushData.bind(this);
        this.renderAchievments = this.renderAchievments.bind(this);
        this.pushAchievmentData = this.pushAchievmentData.bind(this);
        this.setAchievmentData = this.setAchievmentData.bind(this);
        this.deleteExperience = this.deleteExperience.bind(this);
        this.addNewComp = this.addNewComp.bind(this);
        this.hideOptions = this.hideOptions.bind(this);
        this.showOptions = this.showOptions.bind(this);
        this.descriptionAreaClassName = this.descriptionAreaClassName.bind(this);
        this.companyAreaClassName = this.companyAreaClassName.bind(this);
        this.addAchievment = this.addAchievment.bind(this);
        this.addLinkArea = this.addLinkArea.bind(this);
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
            return <CVachievment 
                        type="text"
                        name={achievment.achievment || "Your Achievment"}
                        placeholder="Your Achievment"
                        onBlur={this.setAchievmentData}
                        onKeyDown={this.pushAchievmentData}
                        className="cv-header-input"
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
        let data = {
            company: 'company',
            description: 'description',
            title: 'title',
            date: 'Date period',
            location: 'location',
            link: 'link',
            linkAreaClass: 'hidden',
            achievments: {
                '-KyQi5jtW3WhuV9kdqNW': {
                    achievment: 'achievment'
                }
            }
        };
        this.props.pushData(this.props.userInfo.userUid, this.props.type, data)
    }

    showOptions(e){
        this.setState({
            buttonClass: 'active'
        })
    }

    hideOptions(e){
        this.setState({
            buttonClass: 'hidden',
            chooceIconButton: 'hidden'
        })
    }

    descriptionAreaClassName(){
        if(this.props.type === 'education'){
            return 'hidden'
        } else {
            return 'block'
        }
    }

    companyAreaClassName(){
        if(this.props.type === 'projects'){
            return 'hidden'
        } else {
            return 'block'
        }
    }

    addLinkArea(){
        if(this.props.cv.cvData[this.props.type][this.props.id].linkAreaClass === 'hidden'){
            this.props.setMultipleComponentData(this.props.userInfo.userUid, this.props.type, this.props.id, 'linkAreaClass', 'block');
        } else{
            this.props.setMultipleComponentData(this.props.userInfo.userUid, this.props.type, this.props.id, 'linkAreaClass', 'hidden');
        }
    }

    render(){
        const data = this.props.cv.cvData[this.props.type][this.props.id];
        return(
            <div className="experienceWarpper" onMouseEnter={this.showOptions} onMouseLeave={this.hideOptions}>
                <div className={this.state.buttonClass}>
                    <button onClick={this.deleteExperience}><FontAwesomeCVPage font="trash" /></button>
                    <button onClick={this.addNewComp}><FontAwesomeCVPage font="plus" /></button>
                    <button onClick={this.addLinkArea}><FontAwesomeCVPage font="link" /></button>
                    <button onClick={this.addAchievment}><FontAwesomeCVPage font="plus-circle" /></button>
                </div>
                <div>
                    <div>
                        <CVtextarea 
                            type="text"
                            name={data.title}
                            placeholder="Title"
                            onBlur={this.pushData}
                            className="cv-header-input"
                            id="title"
                        />
                    </div>
                    <div className={this.companyAreaClassName()}>
                        <CVtextarea 
                            type="text"
                            name={data.company}
                            placeholder="Company Name"
                            onBlur={this.pushData}
                            className="cv-header-input"
                            id="company"
                        />
                    </div>
                    <div>
                        <CVtextarea 
                            type="text"
                            name={data.date}
                            placeholder="Date Period"
                            onBlur={this.pushData}
                            className="cv-header-input"
                            id="date"
                        />
                    </div>
                    <div>
                        <CVtextarea 
                            type="text"
                            name={data.location}
                            placeholder="location"
                            onBlur={this.pushData}
                            className="cv-header-input"
                            id="location"
                        />
                    </div>
                    <div className={data.linkAreaClass}>
                        <CVtextarea 
                            type="text"
                            name={data.link}
                            placeholder="link"
                            onBlur={this.pushData}
                            className="cv-header-input"
                            id="link"
                        />
                    </div>
                    <div className={this.descriptionAreaClassName()}>
                        <CVtextarea 
                            type="text"
                            name={data.description}
                            placeholder="Company Description"
                            onBlur={this.pushData}
                            className="cv-header-input"
                            id="description"
                        />
                    </div>
                    <div>
                        {this.renderAchievments()}
                    </div>
                </div>
            </div>
        )
    }
}