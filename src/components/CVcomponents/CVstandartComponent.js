import React from 'react';
import CVtextarea from '../CVcomponents/CVtextarea';
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
        this.showDeleteButton = this.showDeleteButton.bind(this);
        this.deleteExperience = this.deleteExperience.bind(this);
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

    showDeleteButton(e){
        this.setState({
            buttonClass: 'active'
        })
    }

    deleteExperience(e){
        let userUid = this.props.userInfo.userUid;
        this.props.deleteComponent(userUid, this.props.type, this.props.id)
    }


    render(){
        return(
            <div className="experienceWarpper" onClick={this.showDeleteButton}>
                <div className={this.state.buttonClass}>
                    <button onClick={this.deleteExperience}><FontAwesomeCVPage font="trash" /></button>
                </div>
                <div>
                    <div>
                        <CVtextarea 
                            type="text"
                            name={this.props.cv.cvData[this.props.type][this.props.id].title || 'Title'}
                            placeholder="Title"
                            onBlur={ this.pushData }
                            className="cv-header-input"
                            id="title"
                        />
                    </div>
                    <div>
                        <CVtextarea 
                            type="text"
                            name={this.props.cv.cvData[this.props.type][this.props.id].company || "Company Name"}
                            placeholder="Company Name"
                            onBlur={ this.pushData }
                            className="cv-header-input"
                            id="company"
                        />
                    </div>
                    <div>
                        <CVtextarea 
                            type="text"
                            name={this.props.cv.cvData[this.props.type][this.props.id].date || "Date Period"}
                            placeholder="Date Period"
                            onBlur={ this.pushData }
                            className="cv-header-input"
                            id="date"
                        />
                    </div>
                    <div>
                        <CVtextarea 
                            type="text"
                            name={this.props.cv.cvData[this.props.type][this.props.id].location || "location"}
                            placeholder="location"
                            onBlur={ this.pushData }
                            className="cv-header-input"
                            id="location"
                        />
                    </div>
                    <div>
                        <CVtextarea 
                            type="text"
                            name={this.props.cv.cvData[this.props.type][this.props.id].description || "Company Description"}
                            placeholder="Company Description"
                            onBlur={ this.pushData }
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