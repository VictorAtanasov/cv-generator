import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cvActions from '../actions/cvActions';
import * as userActions from '../actions/userActions';
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
            const style = {
                height: '1000px',
                width: '940px',
                margin: '0 auto',
                textAlign: 'center',
                overflow: 'hidden',
                display: 'flex',
                'alignItems': 'center',
                'justifyContent': 'center'
            };
            return(
                <Paper style={style} zDepth={5}>
                    <CircularProgress size={80} thickness={5} />
                </Paper>
            )
        }else{
            if(!(this.props.user.loading) && this.props.user.email){
                const style = {
                    height: 'auto',
                    width: '940px',
                    margin: '0 auto',
                    textAlign: 'center',
                    overflow: 'hidden',
                    padding: '30px'
                };
                return(
                    <Paper style={style} zDepth={5}>
                        <div>
                            <CV userInfo={this.state} />
                        </div>
                    </Paper>
                )
            } else{
                return(
                    <div>
                        <p>
                            Log in or register first fucker
                        </p>
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