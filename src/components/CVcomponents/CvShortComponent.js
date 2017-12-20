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
        this.showInnerPopOverOptions = this.showInnerPopOverOptions.bind(this);
        this.addNewComp = this.addNewComp.bind(this);
        this.showIcons = this.showIcons.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);           
        this.handleClickOutside = this.handleClickOutside.bind(this);
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
        var data = {...registrationData[this.props.type][Object.keys(registrationData[this.props.type])]}
        this.props.pushData(this.props.userInfo.userUid, this.props.type, data)
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({
                buttonClass: 'hidden',
                chooceIconButton: 'hidden',
                innerComponentOptions: 'hidden',
                icons: 'hidden'
            })
        } else{
            this.setState({
                buttonClass: 'active-cv-state',
            })
        }
    }

    showInnerPopOverOptions(){
        if(this.state.innerComponentOptions === 'hidden'){
            this.setState({
                innerComponentOptions: 'innerShortComponentPopOver',
                icons: 'hidden'
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
                icons: 'innerPopOver',
                innerComponentOptions: 'hidden'
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
                ref={this.setWrapperRef}
            >
                <Paper 
                    zDepth={1}
                    className={`${this.state.buttonClass} componentOptionsPopOverRight`}
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
                <div>
                    <span className={data.config.icon === true ? 'inline-block' : 'hidden'}>
                        <FontAwesomeCvPage font={data.font} className="blue-icons" color={{color: this.props.cv.cvData.styles['secondary-color']}} />
                    </span>
                    <CvTextarea 
                        type="text"
                        name={data.achievment}
                        placeholder="Title"
                        className="short-component-title"
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
                        styles={
                            {
                                fontFamily: this.props.cv.cvData.styles['font-family']
                            }
                        }
                    />
                </div>
            </div>
        )
    }
}