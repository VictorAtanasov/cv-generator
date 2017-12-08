import React from 'react';
import FontAwesomeCvPage from '../FontAwesomeCvPage';
import CvTechnologiesTextarea from '../forms/CvTechnologiesTextarea';
import CvTextarea from '../forms/CvTextarea';
import Paper from 'material-ui/Paper';
import _ from 'lodash';

export default class CvTechnologiesComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            buttonClass: 'hidden'
        }

        this.renderTechnologies = this.renderTechnologies.bind(this);
        this.deleteComponent = this.deleteComponent.bind(this);
        this.addNewComp = this.addNewComp.bind(this);
        this.hideOptions = this.hideOptions.bind(this);
        this.showOptions = this.showOptions.bind(this);
        this.addTechnology = this.addTechnology.bind(this);
        this.pushData = this.pushData.bind(this);
    }

    addTechnology(){
        let data = {
            technology: 'technology'
        };
        this.props.pushMultipleComponentData(this.props.userInfo.userUid, this.props.type, this.props.id, 'technologies', data);
    }

    renderTechnologies(){
        return _.map(this.props.cv.cvData[this.props.type][this.props.id].technologies, (technology, key) => {
            return <CvTechnologiesTextarea 
                        name={technology.technology}
                        placeholder="Your Technology"
                        className="cv-technologies-input"
                        compId={this.props.id}
                        {...this.props}
                        id={key}
                        key={key}
                    />
        })
    }

    deleteComponent(e){
        let userUid = this.props.userInfo.userUid;
        this.props.deleteComponent(userUid, this.props.type, this.props.id)
    }

    addNewComp(){
        let data = {
            title:{
                'group-title': 'group-title'
            },
            technologies:{
                '-KiQ9xjtW3eheV2ksqNA': {
                    technology: 'technology'
                }
            }
        };
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
            chooceIconButton: 'hidden'
        })
    }

    pushData(e){
        let userUid = this.props.userInfo.userUid;
        let key = e.target.id;
        let data = e.target.value;
        let componentId = this.props.id;
        this.props.setMultipleComponentNestedData(userUid, this.props.type, componentId, 'title', key, data);
    }

    render(){
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
                        <span onClick={this.deleteComponent}>
                            <FontAwesomeCvPage font="trash" />
                        </span>
                        <span onClick={this.addNewComp}>
                            <FontAwesomeCvPage font="plus" />
                        </span>
                        <span onClick={this.showInnerPopOverOptions}>
                            <FontAwesomeCvPage font='cog' />
                        </span>
                        <span onClick={this.addTechnology}>
                            <FontAwesomeCvPage font="plus-circle" />
                        </span>
                    </Paper>
                    <CvTextarea 
                        type="text"
                        name={this.props.cv.cvData[this.props.type][this.props.id]['title']['group-title']}
                        placeholder="Company Name"
                        onBlur={this.pushData}
                        className="cv-standart-blue textarea-default"
                        id="group-title"
                    />
                <div>
                    {this.renderTechnologies()}
                </div>
            </div>
        )
    }
}