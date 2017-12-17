import React from 'react';
import FontAwesomeCvPage from '../FontAwesomeCvPage';
import CvTechnologiesTextarea from '../forms/CvTechnologiesTextarea';
import CvTextarea from '../forms/CvTextarea';
import CvInnerPopOver from './CvInnerPopOver';
import Paper from 'material-ui/Paper';
import _ from 'lodash';

export default class CvTechnologiesComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            buttonClass: 'hidden',
            innerComponentOptions: 'hidden',
        }

        this.renderTechnologies = this.renderTechnologies.bind(this);
        this.deleteComponent = this.deleteComponent.bind(this);
        this.addNewComp = this.addNewComp.bind(this);
        this.hideOptions = this.hideOptions.bind(this);
        this.showOptions = this.showOptions.bind(this);
        this.addTechnology = this.addTechnology.bind(this);
        this.pushData = this.pushData.bind(this);
        this.showInnerPopOverOptions = this.showInnerPopOverOptions.bind(this);
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
            },
            config: {
                title: true
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
            chooceIconButton: 'hidden',
            innerComponentOptions: 'hidden',
        })
    }

    pushData(e){
        let userUid = this.props.userInfo.userUid;
        let key = e.target.id;
        let data = e.target.value;
        let componentId = this.props.id;
        this.props.setMultipleComponentNestedData(userUid, this.props.type, componentId, 'title', key, data);
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
                        className={`${this.state.buttonClass} componentOptionsPopOverRight'`}
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
                    <CvInnerPopOver
                        className={this.state.innerComponentOptions}
                        {...this.props}
                        type={this.props.type}
                        id={this.props.id}
                    />
                    <div className = {data.config.title === true ? 'block' : 'hidden'}>
                        <CvTextarea 
                            type="text"
                            name={data.title['group-title']}
                            placeholder="Company Name"
                            onBlur={this.pushData}
                            className="cv-standart-sub-title textarea-default"
                            id="group-title"
                            styles={
                                {
                                    color: this.props.cv.cvData.styles['secondary-color'],
                                    fontFamily: this.props.cv.cvData.styles['font-family']
                                }
                            }
                        />
                    </div>
                <div>
                    {this.renderTechnologies()}
                </div>
            </div>
        )
    }
}