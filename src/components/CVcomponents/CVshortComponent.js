import React from 'react';
import FontAwesomeCVPage from '../FontAwesomeCVPage';
import CVtextarea from '../forms/CVtextarea';
import '../../App.css';

export default class CVstandartComponent extends React.Component{
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
        let data = {
            font: 'diamond',
            achievment: 'What are you most proud of?',
            description: 'Why are you proud of this achievment?'
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

    render(){
        return(
            <div className="experienceWarpper" onMouseEnter={this.showOptions} onMouseLeave={this.hideOptions}>
                <div className={this.state.buttonClass}>
                    <button onClick={this.deleteExperience}><FontAwesomeCVPage font="trash" /></button>
                    <button onClick={this.showIcons}><FontAwesomeCVPage font="cog" /></button>
                    <button onClick={this.addNewComp}><FontAwesomeCVPage font="plus" /></button>
                    <div className={`${this.state.chooceIconButton} icons-wrapper`}>
                        <span onClick={this.chooseIcon}>
                            <FontAwesomeCVPage font={'envelope'} />
                        </span>
                        <span onClick={this.chooseIcon}>
                            <FontAwesomeCVPage font={'film'} />
                        </span>
                        <span onClick={this.chooseIcon}>
                            <FontAwesomeCVPage font={'diamond'} />
                        </span>
                    </div>
                </div>
                <div className="inputsContainer">
                    <FontAwesomeCVPage font={this.props.cv.cvData[this.props.type][this.props.id].font} />
                    <CVtextarea 
                        type="text"
                        name={this.props.cv.cvData[this.props.type][this.props.id].achievment}
                        placeholder="Title"
                        className="cv-header-input"
                        id="achievment"
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