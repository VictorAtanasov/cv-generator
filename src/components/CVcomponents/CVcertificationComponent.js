import React from 'react';
import FontAwesomeCVPage from '../FontAwesomeCVPage';
import CVtextarea from '../forms/CVtextarea';
import '../../App.css';

export default class CVcertificationComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            buttonClass: 'hidden',
            chooceIconButton: 'hidden',
        }

        this.pushData = this.pushData.bind(this);
        this.deleteExperience = this.deleteExperience.bind(this);
        this.showOptions = this.showOptions.bind(this);
        this.addNewComp = this.addNewComp.bind(this);
        this.hideOptions = this.hideOptions.bind(this);
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
            case 'certification':
                data.certificate = 'Name of the certificate';
                data.organization = 'Organization';
                data.description = 'Description';
                break;
            case 'courses':
                data.certificate = 'Name of the course';
                data.organization = 'Organization';
                data.description = 'Description';
                break;
            default:
                data.certificate = 'greshka';
                data.organization = 'greshka';
                data.description = 'greshka';
                break;
        }

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
        })
    }

    render(){
        return(
            <div className="experienceWarpper" onMouseEnter={this.showOptions} onMouseLeave={this.hideOptions}>
                <div className={this.state.buttonClass}>
                    <button onClick={this.deleteExperience}><FontAwesomeCVPage font="trash" /></button>
                    <button onClick={this.addNewComp}><FontAwesomeCVPage font="plus" /></button>
                </div>
                <div className="inputsContainer">
                    <CVtextarea 
                        type="text"
                        name={this.props.cv.cvData[this.props.type][this.props.id].certificate}
                        placeholder="Certificate"
                        className="cv-header-input"
                        id="certificate"
                        onBlur={this.pushData}
                    />
                </div>
                <div>
                    <CVtextarea 
                        type="text"
                        name={this.props.cv.cvData[this.props.type][this.props.id].organization}
                        placeholder="Description"
                        className="cv-header-input"
                        id="organization"
                        onBlur={this.pushData}
                    />
                </div>
                <div>
                    <CVtextarea 
                        type="text"
                        name={this.props.cv.cvData[this.props.type][this.props.id].description}
                        placeholder="Description"
                        className="cv-header-input"
                        id="description"
                        onBlur={this.pushData}
                    />
                </div>
            </div>
        )
    }
}