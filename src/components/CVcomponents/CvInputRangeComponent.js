import React from 'react';
import CvTextarea from '../forms/CvTextarea';
import InputRange from 'react-input-range';
import FontAwesomeCvPage from '../FontAwesomeCvPage';
import '../../../node_modules/react-input-range/lib/css/index.css';

export default class CvInputRangeComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            value: this.props.cv.cvData[this.props.type][this.props.id].range,
            buttonClass: 'hidden'
        };

        this.pushData = this.pushData.bind(this);
        this.pushValue = this.pushValue.bind(this);
        this.deleteComponent = this.deleteComponent.bind(this);
        this.addNewRange = this.addNewRange.bind(this);
        this.showOptions = this.showOptions.bind(this);
        this.hideOptions = this.hideOptions.bind(this);
        this.checkComponentType = this.checkComponentType.bind(this);
    }

    pushData(e){
        let userUid = this.props.userInfo.userUid;
        let key = e.target.id;
        let data = e.target.value;
        let componentId = this.props.id;
        this.props.setMultipleComponentData(userUid, this.props.type, componentId, key, data);
    }

    pushValue(value){
        let userUid = this.props.userInfo.userUid;
        this.props.setMultipleComponentData(userUid, this.props.type, this.props.id, 'range', value);
    }

    addNewRange(){
        let userUid = this.props.userInfo.userUid;
        let data = {
            title: 'expertise-title',
            range: '10',
            description: 'description'
        }
        this.props.pushData(userUid, this.props.type, data);
    }

    deleteComponent(e){
        let userUid = this.props.userInfo.userUid;
        this.props.deleteComponent(userUid, this.props.type, this.props.id)
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

    checkComponentType(){
        if(this.props.type === 'expertise'){
            return 'hidden'
        } else {
            return 'block'
        }
    }

    render(){
        const data = this.props.cv.cvData[this.props.type][this.props.id];
        return(
            <div onMouseEnter={this.showOptions} onMouseLeave={this.hideOptions}>
                <div className={this.state.buttonClass}>
                    <button onClick={this.deleteComponent}><FontAwesomeCvPage font="trash" /></button>
                    <button onClick={this.addNewRange}><FontAwesomeCvPage font="plus-circle" /></button>
                </div>
                <div>
                    <CvTextarea
                        type="text"
                        name={data.title}
                        placeholder="Title"
                        onBlur={this.pushData}
                        className="cv-header-input"
                        id="title"
                    />
                </div>
                <div className={this.checkComponentType()}>
                    <CvTextarea
                        type="text"
                        name={data.title}
                        placeholder="Title"
                        onBlur={this.pushData}
                        className="cv-header-input"
                        id="description"
                    />
                </div>
                <div>
                    <InputRange
                        maxValue={100}
                        minValue={0}
                        value={this.state.value*1}
                        onChange={value => this.setState({value})}
                        onChangeComplete={value => this.pushValue(value)}
                    />
                </div>
            </div>
        )
    }
}