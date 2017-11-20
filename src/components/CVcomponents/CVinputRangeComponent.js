import React from 'react';
import CVtextarea from '../forms/CVtextarea';
import InputRange from 'react-input-range';
import FontAwesomeCVPage from '../FontAwesomeCVPage';
import '../../App.css';
import '../../../node_modules/react-input-range/lib/css/index.css';

export default class CVinputRangeComponent extends React.Component{
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
            range: '10'
        }
        this.props.pushData(userUid, 'expertise', data);
    }

    deleteComponent(e){
        let userUid = this.props.userInfo.userUid;
        this.props.deleteComponent(userUid, this.props.type, this.props.id)
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
        const data = this.props.cv.cvData[this.props.type][this.props.id];
        return(
            <div onMouseEnter={this.showOptions} onMouseLeave={this.hideOptions}>
                <div className={this.state.buttonClass}>
                    <button onClick={this.deleteComponent}><FontAwesomeCVPage font="trash" /></button>
                    <button onClick={this.addNewRange}><FontAwesomeCVPage font="plus-circle" /></button>
                </div>
                <div>
                    <CVtextarea
                        type="text"
                        name={data.title}
                        placeholder="Title"
                        onBlur={this.pushData}
                        className="cv-header-input"
                        id="title"
                    />
                </div>
                <InputRange
                    maxValue={100}
                    minValue={0}
                    value={this.state.value*1}
                    onChange={value => this.setState({value})}
                    onChangeComplete={value => this.pushValue(value)}
                />
            </div>
        )
    }
}