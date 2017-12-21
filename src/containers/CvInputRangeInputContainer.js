import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cvActions from '../actions/cvActions';
import CvInputRangeComponent from '../components/CVcomponents/CvInputRangeComponent';
import _ from 'lodash';

class CvInputRangeInputContainer extends React.Component{

    renderComponents(){
        return _.map(this.props.cv.cvData[this.props.type].components, (comp, key) => {
            return <CvInputRangeComponent 
                        {...this.props}
                        key={key}
                        id={key}
                        type={this.props.type}
                    />
                    
        })
    }
    

    render(){
        return(
                <div className="input-range-wrapper">
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


export default connect(mapStateToProps, mapDispatchToProps)(CvInputRangeInputContainer)