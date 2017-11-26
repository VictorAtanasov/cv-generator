import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cvActions from '../actions/cvActions';
import * as userActions from '../actions/userActions';
import {FontAwesomeSpinner} from '../components/FontAwesomeSpinner';
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
                <FontAwesomeSpinner />
            )
        }else{
            if(!(this.props.user.loading) && this.props.user.email){
                return(
                    <div>
                        <CV userInfo={this.state} />
                    </div>
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