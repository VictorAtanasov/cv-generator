import React from 'react';
import FontAwesomeCVPage from '../FontAwesomeCVPage';
import CVtextarea from '../forms/CVtextarea';
import '../../App.css';

export default class CVstandartComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            buttonClass: 'hidden',
            chooceIconButton: 'hidden'
        }

        this.pushData = this.pushData.bind(this);
        this.deleteExperience = this.deleteExperience.bind(this);
        this.showDeleteButton = this.showDeleteButton.bind(this);
        this.showIcons = this.showIcons.bind(this);
        this.chooseIcon = this.chooseIcon.bind(this);    
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

    showDeleteButton(e){
        this.setState({
            buttonClass: 'active'
        })
    }

    showIcons(e){
        this.setState({
            chooceIconButton: 'active'
        })
    }

    chooseIcon(e){
        let font = e.target.className.replace(/^.+-/, '');
        let componentId = this.props.id;
        this.props.setMultipleComponentData(this.props.userInfo.userUid, this.props.type, componentId, 'font', font);
    }

    render(){
        return(
            <div className="experienceWarpper" onClick={this.showDeleteButton}>
                <div className={this.state.buttonClass}>
                    <button onClick={this.deleteExperience}><FontAwesomeCVPage font="trash" /></button>
                    <button onClick={this.showIcons}><FontAwesomeCVPage font="cog" /></button>
                    <div className={this.state.chooceIconButton}>
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
                <div>
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