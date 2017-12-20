import React from 'react';
import CvTextarea from '../forms/CvTextarea';
import FontAwesomeCvPage from '../FontAwesomeCvPage';
import CvInnerPopOver from './CvInnerPopOver';
import registrationData from '../../Firebase/data';
import {Paper, Slider} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


export default class CvInputRangeComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            value: this.props.cv.cvData[this.props.type][this.props.id].range,
            buttonClass: 'hidden',
            innerComponentOptions: 'hidden',
        };

        this.pushData = this.pushData.bind(this);
        this.pushValue = this.pushValue.bind(this);
        this.deleteComponent = this.deleteComponent.bind(this);
        this.addNewRange = this.addNewRange.bind(this);
        this.onRangeChange = this.onRangeChange.bind(this);
        this.showInnerPopOverOptions = this.showInnerPopOverOptions.bind(this);
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

    pushValue(event){
        let userUid = this.props.userInfo.userUid;
        this.props.setMultipleComponentData(userUid, this.props.type, this.props.id, 'range', this.state.value);
    }

    addNewRange(){
        let userUid = this.props.userInfo.userUid;
        var data = {...registrationData[this.props.type][Object.keys(registrationData[this.props.type])]}
        this.props.pushData(userUid, this.props.type, data);
    }

    deleteComponent(e){
        let userUid = this.props.userInfo.userUid;
        this.props.deleteComponent(userUid, this.props.type, this.props.id)
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
                innerComponentOptions: 'hidden'
            })
        } else{
            this.setState({
                buttonClass: 'active-cv-state',
            })
        }
    }

    onRangeChange(event, range){
        this.setState({
            value: range
        })
    }

    showInnerPopOverOptions(){
        if(this.state.innerComponentOptions === 'hidden'){
            this.setState({
                innerComponentOptions: 'innerSmallerPopOver'
            })
        } else{
            this.setState({
                innerComponentOptions: 'hidden'
            })
        }
    }

    render(){
        const data = this.props.cv.cvData[this.props.type][this.props.id];
        const muiTheme = getMuiTheme({
            slider: {
              trackColor: this.props.cv.cvData.styles['secondary-color'],
              selectionColor: this.props.cv.cvData.styles['secondary-color'],
            },
        });
        return(
            <div 
                className="experienceWarpper input-range-component"
                ref={this.setWrapperRef}
            >
                <Paper 
                    zDepth={1}
                    className={`${this.state.buttonClass} componentOptionsSmallerPopOver`}
                >
                    <span onClick={this.deleteComponent}>
                        <FontAwesomeCvPage font="trash" />
                    </span>
                    <span onClick={this.addNewRange}>
                        <FontAwesomeCvPage font="plus" />
                    </span>
                    <span onClick={this.showInnerPopOverOptions}>
                        <FontAwesomeCvPage font='cog' />
                    </span>
                </Paper>
                <CvInnerPopOver
                        className={this.state.innerComponentOptions}
                        {...this.props}
                        type={this.props.type}
                        id={this.props.id}
                />
                <div>
                    <CvTextarea
                        type="text"
                        name={data.title}
                        placeholder="Title"
                        onBlur={this.pushData}
                        className="cv-standart-sub-title textarea-default"
                        id="title"
                        color={{color: this.props.cv.cvData.styles['secondary-color']}}
                    />
                </div>
                <div className={data.config.slider === true ? 'block' : 'hidden'}>
                    <MuiThemeProvider muiTheme={muiTheme}>
                        <Slider
                            min={0}
                            max={100}
                            step={1}
                            value={this.state.value*1}
                            onChange={this.onRangeChange}
                            onDragStop={this.pushValue}
                            className="slider"
                        />
                    </MuiThemeProvider>
                </div>
            </div>
        )
    }
}