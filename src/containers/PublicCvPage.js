import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cvActions from '../actions/cvActions';
import * as userActions from '../actions/userActions';
import CvAside from '../components/CVcomponents/CvAside';
import {Paper, CircularProgress } from 'material-ui';
import CV from './CV';


class PublicCvPage extends React.Component{
    constructor(props){
        super(props);
        this.renderCVData = this.renderCVData.bind(this);
        this.state = {
            userUid: this.props.match.params.id
        }
        this.disableClick = this.disableClick.bind(this);
    }

    disableClick(event){
        if(event.button === 0){
            return false
        }
    }

    componentWillMount(){
        this.props.getCV(this.props.match.params.id);
        this.props.getUser();
    }

    renderCVData(){
        if(!(this.props.cv.cvData)){
            return(
                <div className="loader-wrapper">
                    <CircularProgress size={80} thickness={5} color='white' />
                </div>
            )
        }else{
            const style = {
                height: 'auto',
                width: '940px',
                margin: '0 auto',
                textAlign: 'center',
                overflow: 'hidden',
                padding: '30px'
            };
            return(
                <div onClick={this.disableClick}>
                    <Paper 
                        style={style} 
                        zDepth={5} 
                        className="paper"
                    >
                        <div className="page" key="1">
                            <CV userInfo={this.state} />
                        </div>
                    </Paper>
                </div>
            )
        }
    }

    render(){
        return(
            <div className="cv-page-wrapper">
                {this.renderCVData()}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user,
        cv: state.cv
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ ...userActions, ...cvActions }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(PublicCvPage)