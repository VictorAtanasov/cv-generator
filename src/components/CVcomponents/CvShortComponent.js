import React from 'react';
import FontAwesomeCvPage from '../FontAwesomeCvPage';
import CvTextarea from '../forms/CvTextarea';
import registrationData from '../../Firebase/data';

export default class CvShortComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            buttonClass: 'hidden',
            chooceIconButton: 'hidden',
        }

        this.pushData = this.pushData.bind(this);
        this.deleteExperience = this.deleteExperience.bind(this);
        this.showOptions = this.showOptions.bind(this);
        this.showIcons = this.showIcons.bind(this);
        this.chooseIcon = this.chooseIcon.bind(this);
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

    showIcons(e){
        if(this.state.chooceIconButton === 'active'){
            this.setState({
                chooceIconButton: 'hidden'
            })
        }else{
            this.setState({
                chooceIconButton: 'active'
            })
        }
    }

    chooseIcon(e){
        let font = e.target.className.replace(/^.+-/, '');
        let componentId = this.props.id;
        this.props.setMultipleComponentData(this.props.userInfo.userUid, this.props.type, componentId, 'font', font);
    }

    addNewComp(){
        var data = {};
        switch(this.props.type){
            case 'proud':
                data = {...registrationData.proud['-KyQi5jtW3WhaV9kdqNW']};
                break;
            case 'strengths':
                data = {...registrationData.strengths['-KyQi5jtW3WhaV9kdqNW']};
                break;
            case 'awards':
                data = {...registrationData.awards['-KyQi5jtW3WhaV9kdqNW']};
                break;
            case 'achievments':
                data = {...registrationData.achievments['-KyQi5jtA2WhaV9kdqNW']};
                break;
            case 'motivation':
                data = {...registrationData.motivation['-KyQy1jtWdWhqV9kdqNW']};
                break;
            default:
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
            chooceIconButton: 'hidden'
        })
    }

    render(){
        const data = this.props.cv.cvData[this.props.type][this.props.id];
        return(
            <div className="experienceWarpper" onMouseEnter={this.showOptions} onMouseLeave={this.hideOptions}>
                <div className={this.state.buttonClass}>
                    <button onClick={this.deleteExperience}><FontAwesomeCvPage font="trash" /></button>
                    <button onClick={this.showIcons}><FontAwesomeCvPage font="cog" /></button>
                    <button onClick={this.addNewComp}><FontAwesomeCvPage font="plus" /></button>
                    <div className={`${this.state.chooceIconButton} icons-wrapper`}>
                        <span onClick={this.chooseIcon}>
                            <FontAwesomeCvPage font={'envelope'} />
                        </span>
                        <span onClick={this.chooseIcon}>
                            <FontAwesomeCvPage font={'film'} />
                        </span>
                        <span onClick={this.chooseIcon}>
                            <FontAwesomeCvPage font={'diamond'} />
                        </span>
                    </div>
                </div>
                <div className="inputsContainer">
                    <FontAwesomeCvPage font={data.font} />
                    <CvTextarea 
                        type="text"
                        name={data.achievment}
                        placeholder="Title"
                        className="cv-header-input"
                        id="achievment"
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