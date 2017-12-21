import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cvActions from '../actions/cvActions';
import CvCertificationComponent from '../components/CVcomponents/CvCertificationComponent';
import _ from 'lodash';

class CvCertificationContainer extends React.Component{

    renderComponents(){
        return _.map(this.props.cv.cvData[this.props.type].components, (comp, key) => {
            return <CvCertificationComponent 
                        {...this.props}
                        key={key}
                        id={key}
                        type={this.props.type}
                    />
                    
        })
    }

    
    render(){
        return(
                <div>
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


export default connect(mapStateToProps, mapDispatchToProps)(CvCertificationContainer)