import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cvActions from '../actions/cvActions';
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
        if(this.props.cv.email){
            return(
                <div>
                    {this.props.cv.email}
                </div>
            )
        } else {
            return(
                <div>
                    <FontAwesomeSpinner />
                </div>
            )
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
        cv: state.cv
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(cvActions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(CV)