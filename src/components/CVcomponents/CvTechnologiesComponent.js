import React from 'react';
import FontAwesomeCvPage from '../FontAwesomeCvPage';
import CvTechnologiesTextarea from './CvTechnologiesTextarea';
import CvTextarea from '../forms/CvTextarea';
import _ from 'lodash';

export default class CvTechnologiesComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            buttonClass: 'hidden'
        }

        this.renderTechnologies = this.renderTechnologies.bind(this);
        this.pushTechnologyData = this.pushTechnologyData.bind(this);
        this.setTechnologyData = this.setTechnologyData.bind(this);
        this.deleteComponent = this.deleteComponent.bind(this);
        this.addNewComp = this.addNewComp.bind(this);
        this.hideOptions = this.hideOptions.bind(this);
        this.showOptions = this.showOptions.bind(this);
        this.addTechnology = this.addTechnology.bind(this);
        this.pushData = this.pushData.bind(this);
    }

    pushTechnologyData(e){
        let userUid = this.props.userInfo.userUid;
        let data = {
            technology: 'technology'
        }
        let targetValue = {
            'technology': e.target.value
        }
        let componentId = this.props.id;
        let key = e.target.id;
        if(e.key === 'Enter'){
            this.props.pushMultipleComponentData(userUid, this.props.type, componentId, 'technologies', data);
            this.props.setMultipleComponentNestedData(userUid, this.props.type, componentId, 'technologies', key, targetValue);
        } else if (e.key === 'Backspace'){
            if(e.target.value === ''){
                this.props.deleteMultipleComponentNestedData(userUid, this.props.type, componentId, 'technologies', key, targetValue);
            }
        }
    }

    addTechnology(){
        let data = {
            technology: 'technology'
        };
        this.props.pushMultipleComponentData(this.props.userInfo.userUid, this.props.type, this.props.id, 'technologies', data);
    }

    setTechnologyData(e){
        let userUid = this.props.userInfo.userUid;
        let targetValue = {
            'technology': e.target.value
        }
        let componentId = this.props.id;
        let key = e.target.id;
        this.props.setMultipleComponentNestedData(userUid, this.props.type, componentId, 'technologies', key, targetValue);
    }

    renderTechnologies(){
        return _.map(this.props.cv.cvData[this.props.type][this.props.id].technologies, (technology, key) => {
            return <CvTechnologiesTextarea 
                        type="text"
                        name={technology.technology}
                        placeholder="Your Technology"
                        onBlur={this.setTechnologyData}
                        onKeyDown={this.pushTechnologyData}
                        className="cv-header-input"
                        id={key}
                        key={key}
                    />
        })
    }

    deleteComponent(e){
        let userUid = this.props.userInfo.userUid;
        this.props.deleteComponent(userUid, this.props.type, this.props.id)
    }

    addNewComp(){
        let data = {
            title:{
                'group-title': 'group-title'
            },
            technologies:{
                '-KiQ9xjtW3eheV2ksqNA': {
                    technology: 'technology'
                }
            }
        };
        this.props.pushData(this.props.userInfo.userUid, this.props.type, data)
    }

    showOptions(e){
        this.setState({
            buttonClass: 'active-cv-state'
        })
    }

    hideOptions(e){
        this.setState({
            buttonClass: 'hidden',
            chooceIconButton: 'hidden'
        })
    }

    pushData(e){
        let userUid = this.props.userInfo.userUid;
        let key = e.target.id;
        let data = e.target.value;
        let componentId = this.props.id;
        this.props.setMultipleComponentNestedData(userUid, this.props.type, componentId, 'title', key, data);
    }

    render(){
        return(
            <div className="experienceWarpper" onMouseEnter={this.showOptions} onMouseLeave={this.hideOptions}>
                <div className={this.state.buttonClass}>
                    <button onClick={this.deleteComponent}><FontAwesomeCvPage font="trash" /></button>
                    <button onClick={this.addNewComp}><FontAwesomeCvPage font="plus" /></button>
                    <button onClick={this.addTechnology}><FontAwesomeCvPage font="plus-circle" /></button>
                </div>
                <div>
                    <CvTextarea 
                        type="text"
                        name={this.props.cv.cvData[this.props.type][this.props.id]['title']['group-title']}
                        placeholder="Company Name"
                        onBlur={this.pushData}
                        className="cv-header-input"
                        id="group-title"
                    />
                </div>
                <div>
                    {this.renderTechnologies()}
                </div>
            </div>
        )
    }
}