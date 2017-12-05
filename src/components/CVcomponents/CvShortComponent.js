import React from 'react';
import FontAwesomeCvPage from '../FontAwesomeCvPage';
import CvTextarea from '../forms/CvTextarea';
import registrationData from '../../Firebase/data';
import Paper from 'material-ui/Paper';
import CvInnerPopOver from './CvInnerPopOver';
import CvIcons from './CvIcons';

export default class CvShortComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            buttonClass: 'hidden',
            chooceIconButton: 'hidden',
            innerComponentOptions: 'hidden',
            icons: 'hidden'
        }

        this.pushData = this.pushData.bind(this);
        this.deleteExperience = this.deleteExperience.bind(this);
        this.showOptions = this.showOptions.bind(this);
        this.showInnerPopOverOptions = this.showInnerPopOverOptions.bind(this);
        this.addNewComp = this.addNewComp.bind(this);
        this.hideOptions = this.hideOptions.bind(this);
        this.showIcons = this.showIcons.bind(this);
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
            buttonClass: 'active-cv-state'
        })
    }

    hideOptions(e){
        this.setState({
            buttonClass: 'hidden',
            chooceIconButton: 'hidden',
            innerComponentOptions: 'hidden',
            icons: 'hidden'
        })
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

    showIcons(){
        if(this.state.icons === 'hidden'){
            this.setState({
                icons: 'innerPopOver'
            })
        } else{
            this.setState({
                icons: 'hidden'
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
                    className={this.state.buttonClass + ' ' + 'componentOptionsPopOver'}
                >
                    <span onClick={this.deleteExperience}>
                        <FontAwesomeCvPage font="trash" />
                    </span>
                    <span onClick={this.addNewRange}>
                        <FontAwesomeCvPage font="plus" />
                    </span>
                    <span onClick={this.showInnerPopOverOptions}>
                        <FontAwesomeCvPage font='cog' />
                    </span>
                    <span onClick={this.showIcons}>
                        <FontAwesomeCvPage font='star' />
                    </span>
                </Paper>
                <CvInnerPopOver
                        className={this.state.innerComponentOptions}
                        {...this.props}
                        type={this.props.type}
                        id={this.props.id}
                />
                <CvIcons
                    className={this.state.icons}
                    {...this.props}
                    type={this.props.type}
                    id={this.props.id}
                />
                {/* <div className={this.state.buttonClass}>
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
                </div> */}
                <div>
                    <span className={data.config.icon === true ? 'block' : 'hidden'}>
                        <FontAwesomeCvPage font={data.font} />
                    </span>
                    <CvTextarea 
                        type="text"
                        name={data.achievment}
                        placeholder="Title"
                        className="cv-header-input"
                        id="achievment"
                        onBlur={this.pushData}
                    />
                </div>
                <div className={data.config.description === true ? 'block' : 'hidden'}>
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