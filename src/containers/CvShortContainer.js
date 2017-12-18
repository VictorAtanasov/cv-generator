import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cvActions from '../actions/cvActions';
import CvShortComponent from '../components/CVcomponents/CvShortComponent';
import CvTextarea from '../components/forms/CvTextarea';
import Paper from 'material-ui/Paper';
import registrationData from '../Firebase/data';
import FontAwesomeCvPage from '../components/FontAwesomeCvPage';
import _ from 'lodash';

class CvShortContainer extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            buttonClass: 'hidden',
        }

        this.renderComponents = this.renderComponents.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.addNewComp = this.addNewComp.bind(this);
        this.hideOptions = this.hideOptions.bind(this);
        this.showOptions = this.showOptions.bind(this);      
    }

    renderComponents(){
        return _.map(this.props.cv.cvData[this.props.type], (comp, key) => {
            return <CvShortComponent 
                        {...this.props}
                        key={key}
                        id={key}
                        type={this.props.type}
                    />
                    
        })
    }

    updateTitle(e){
        let data = e.target.value;
        let key = e.target.id;
        this.props.setComponentData(this.props.userInfo.userUid, 'titles', key, data);
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
        })
    }
    
    render(){
        const data = this.props.cv.cvData.titles;
        return(
            <div onMouseLeave={this.hideOptions}>
                <Paper 
                    zDepth={1}
                    className={`${this.state.buttonClass} componentOptionsPopOverRightTitle`}
                >
                    <span onClick={this.deleteExperience}>
                        <FontAwesomeCvPage font="trash" />
                    </span>
                    <span onClick={this.addNewComp}>
                        <FontAwesomeCvPage font="plus" />
                    </span>
                </Paper>
                <div>
                    <CvTextarea 
                        type="text"
                        name={data[this.props.type]}
                        placeholder="Title"
                        onBlur={this.updateTitle}
                        onFocus={this.showOptions}
                        className="textarea-component-title"
                        id={this.props.type}
                        styles={
                            {
                                color: this.props.cv.cvData.styles['main-color'],
                                fontFamily: this.props.cv.cvData.styles['font-family']
                            }
                        }
                    />
                </div>
                {this.renderComponents()}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        cv: state.cv
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(cvActions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(CvShortContainer)