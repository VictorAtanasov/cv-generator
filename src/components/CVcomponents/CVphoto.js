import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cvActions from '../../actions/cvActions';
import '../../App.css';

class Photo extends React.Component{
    constructor(props){
        super(props);

        this.pushImage = this.pushImage.bind(this);
    }

    pushImage(e){
        let file = e.target.files[0];
        this.props.uploadImage(this.props.userInfo, file);
    }

    render(){
        return(
            <div>
                <div>
                    <img src={this.props.cv.cvData.image} alt="user"/>
                </div>
                <div>
                    <input type="file" onChange={this.pushImage}/>
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


export default connect(mapStateToProps, mapDispatchToProps)(Photo)