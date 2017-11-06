import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cvActions from '../actions/cvActions';
import * as userActions from '../actions/userActions';
import { FontAwesomeSpinner } from '../components/FontAwesomeSpinner';


class CV extends React.Component{
    constructor(props){
        super(props);
        this.renderCVData = this.renderCVData.bind(this);
    }

    componentWillMount(){
        this.props.getCV(this.props.match.params.id)
    }

    renderCVData(){
        if(this.props.user.loading || this.props.cv.loading){
            return(
                <FontAwesomeSpinner />
            )
        }else{
            if(!(this.props.user.loading) && this.props.user.email){
                return(
                    <div>
                        {this.props.cv.email}
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
            <div>
                <div>
                     <div>
                        {this.renderCVData()}
                    </div>
                </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(CV)