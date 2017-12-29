import React from 'react';
import FontAwesomeCvPage from '../FontAwesomeCvPage';
import Paper from 'material-ui/Paper';
import registrationData from '../../Firebase/data';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cvActions from '../../actions/cvActions';
import TextField from 'material-ui/TextField';

class CvTitles extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            buttonClass: 'hidden',
            text: this.props.cv.cvData[this.props.type].title,
        }

        this.addNewComp = this.addNewComp.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);           
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.deleteComp = this.deleteComp.bind(this);
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            text: nextProps.cv.cvData[nextProps.type].title
        })
    }

    updateTitle(e){
        let data = e.target.value;
        this.props.setComponentData(this.props.userInfo.userUid, this.props.type, 'title', data);
    }

    addNewComp(){
        var data = {...registrationData[this.props.type].components[Object.keys(registrationData[this.props.type].components)]}
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
            })
        } else{
            this.setState({
                buttonClass: 'active-cv-state',
            })
        }
    }

    deleteComp(){
        this.props.deleteCvSection(this.props.userInfo.userUid, this.props.type)
    }

    render(){
        const container = {
            height: '65px',
            lineHeight: '30px'
        }

        const style = {
            border: 'none'
        }
    
        const styleFocus = {
            border: '1px solid #54a7d3'
        }
        return(
            <div ref={this.setWrapperRef}>
                <Paper 
                    zDepth={1}
                    className={`${this.state.buttonClass} componentOptionsPopOverTitle`}
                >
                    <span onClick={this.deleteComp}>
                        <FontAwesomeCvPage font="trash" />
                    </span>
                    <span onClick={this.addNewComp}>
                        <FontAwesomeCvPage font="plus" />
                    </span>
                </Paper>
                <div>
                    <TextField
                        hintText="Title" 
                        multiLine={true}
                        rows={1}
                        //rowsMax={2}
                        className="textarea-component-title"
                        id="textarea-component-title" 
                        onBlur={this.updateTitle}
                        onChange={
                            (ev) => {
                                this.setState({text: ev.target.value})
                            }
                        }
                        value={this.state.text}
                        underlineStyle={style}
                        underlineFocusStyle={styleFocus}
                        inputStyle={
                            {
                                color: this.props.cv.cvData.styles['main-color'],
                                fontFamily: this.props.cv.cvData.styles['font-family'],
                            }
                        }
                        style={container}
                    />
                </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(CvTitles)