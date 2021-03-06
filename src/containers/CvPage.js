import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cvActions from '../actions/cvActions';
import * as userActions from '../actions/userActions';
import CvAside from '../components/CVcomponents/CvAside';
import {Paper, CircularProgress } from 'material-ui';
import CV from './CV';


class CvPage extends React.Component{
    constructor(props){
        super(props);
        this.renderCVData = this.renderCVData.bind(this);
        this.state = {
            userUid: this.props.match.params.id
        }
    }

    componentWillMount(){
        this.props.getCV(this.props.match.params.id);
        this.props.getUser();
    }

    renderCVData(){
        if(this.props.user.loading || !(this.props.cv.cvData)){
            return(
                <div className="loader-wrapper">
                    <CircularProgress size={80} thickness={5} color='white' />
                </div>
            )
        }else{
            if(!(this.props.user.loading) && this.props.user.uid){
                const style = {
                    height: 'auto',
                    width: '940px',
                    margin: '0 auto',
                    textAlign: 'center',
                    overflow: 'hidden',
                    padding: '30px'
                };
                return(
                    <div>
                        <div className="aside">
                            <CvAside 
                                setComponentData={this.props.setComponentData}
                                createSection={this.props.createSection}
                                cv={this.props.cv}
                                user={this.state.userUid} 
                            />
                        </div>
                        <Paper 
                            style={style} 
                            zDepth={5} 
                            className="paper"
                            id='divToPDF'
                        >
                            <div className="page" key="1">
                                <CV userInfo={this.state} />
                            </div>
                        </Paper>
                    </div>
                )
            } else{
                return(
                    <div className="msg-wrapper">
                        <h2>
                            Log in or register first!
                        </h2>
                    </div>
                )
            }
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


export default connect(mapStateToProps, mapDispatchToProps)(CvPage)