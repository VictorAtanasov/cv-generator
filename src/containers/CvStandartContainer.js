import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cvActions from '../actions/cvActions';
import CvStandartComponent from '../components/CVcomponents/CvStandartComponent';
import CvTextarea from '../components/forms/CvTextarea';
import FontAwesomeCvPage from '../components/FontAwesomeCvPage';
import Paper from 'material-ui/Paper';
import _ from 'lodash';

class CvStandartContainer extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            buttonClass: 'hidden',
        }

        this.updateTitle = this.updateTitle.bind(this);
        this.hideOptions = this.hideOptions.bind(this);
        this.showOptions = this.showOptions.bind(this);
    }
    
    renderComponents(){
        return _.map(this.props.cv.cvData[this.props.type], (comp, key) => {
            return <CvStandartComponent
                        {...this.props}
                        userInfo={this.props.userInfo} 
                        key = {key}
                        id = {key}
                        type = {this.props.type}
                    />
        })
    }

    updateTitle(e){
        let data = e.target.value;
        let key = e.target.id;
        this.props.setComponentData(this.props.userInfo.userUid, 'titles', key, data);
        this.hideOptions();
    }
    
    showOptions(e){
        this.setState({
            buttonClass: 'active-cv-state',
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
            <div>
                <Paper 
                    zDepth={1}
                    className={`${this.state.buttonClass} componentOptionsPopOverTitle`}
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


export default connect(mapStateToProps, mapDispatchToProps)(CvStandartContainer)