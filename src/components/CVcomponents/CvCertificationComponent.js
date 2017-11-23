import React from 'react';
import FontAwesomeCvPage from '../FontAwesomeCvPage';
import CvTextarea from '../forms/CvTextarea';
import registrationData from '../../Firebase/data';

export default class CvCertificationComponent extends React.Component{
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
                data = {...registrationData.certification['-KyQi5jtW3WhaV9kdqNA']};
                break;
            case 'courses':
                data = {...registrationData.courses['-KyQi5jtW3WhaV9kdqNA']};
                break;
            default:
                break;
        }

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
        })
    }

    render(){
        const data = this.props.cv.cvData[this.props.type][this.props.id];
        return(
            <div className="experienceWarpper" onMouseEnter={this.showOptions} onMouseLeave={this.hideOptions}>
                <div className={this.state.buttonClass}>
                    <button onClick={this.deleteExperience}><FontAwesomeCvPage font="trash" /></button>
                    <button onClick={this.addNewComp}><FontAwesomeCvPage font="plus" /></button>
                </div>
                <div className="inputsContainer">
                    <CvTextarea 
                        type="text"
                        name={data.certificate}
                        placeholder="Certificate"
                        className="cv-header-input"
                        id="certificate"
                        onBlur={this.pushData}
                    />
                </div>
                <div>
                    <CvTextarea 
                        type="text"
                        name={data.organization}
                        placeholder="Description"
                        className="cv-header-input"
                        id="organization"
                        onBlur={this.pushData}
                    />
                </div>
                <div>
                    <CvTextarea 
                        type="text"
                        name={data.description}
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