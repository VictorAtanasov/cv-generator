import React from 'react';
import AutosizeInput from 'react-input-autosize';


export default class CvTechnologiesTextarea extends React.Component{
    constructor(props){
        super(props);

        this.state={
            html: this.props.name
        }

        this.handleChange = this.handleChange.bind(this);
        this.setTechnologyData = this.setTechnologyData.bind(this);
        this.pushTechnologyData = this.pushTechnologyData.bind(this);
    }

    handleChange(e){
        this.setState({
            html: e.target.value
        })
    }


    setTechnologyData(e){
        let userUid = this.props.userInfo.userUid;
        let targetValue = {
            'technology': this.state.html
        }
        let componentId = this.props.compId;
        let key = e.target.id;
        this.props.setMultipleComponentNestedData(userUid, this.props.type, componentId, 'technologies', key, targetValue);
    }
    
    pushTechnologyData(e){
        let userUid = this.props.userInfo.userUid;
        let data = {
            technology: 'technology'
        }
        let targetValue = {
            'technology': e.target.value
        }
        let componentId = this.props.compId;
        let key = e.target.id;
        if(e.key === 'Enter'){
            this.props.pushMultipleComponentData(userUid, this.props.type, componentId, 'technologies', data);
            this.props.setMultipleComponentNestedData(userUid, this.props.type, componentId, 'technologies', key, targetValue);
        } else if (e.key === 'Backspace'){
            if(e.target.value === ''){
                this.props.deleteMultipleComponentNestedData(userUid, this.props.type, componentId, 'technologies', key, targetValue);
            }
        }
    }

    render(){
        return(
            <AutosizeInput
                onBlur={this.setTechnologyData}
                value={this.state.html}
                placeholder={this.props.placeholder}
                id={this.props.id}
                onChange={this.handleChange}
                onKeyDown={this.pushTechnologyData}
                spellCheck="false"
            />
        )
    }
}