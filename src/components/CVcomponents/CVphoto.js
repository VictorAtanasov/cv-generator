import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cvActions from '../../actions/cvActions';
import FontAweosomeCVPage from '../FontAwesomeCVPage';
import '../../App.css';

class Photo extends React.Component{
    constructor(props){
        super(props);

        this.pushImage = this.pushImage.bind(this);
        this.renderImage = this.renderImage.bind(this);
    }

    pushImage(e){
        let file = e.target.files[0];
        this.props.uploadImage(this.props.userInfo, file);
    }



    renderImage(){
        if(this.props.cv.cvData){
            if(this.props.cv.cvData.image !== ' '){
                return(
                    <img src={this.props.cv.cvData.image} alt="user"/>
                )
            } else {
                return(
                    <img src="https://app.enhancv.com/b7e44f9da8257826e8dd86a243c2ec6b.svg" alt="user"/>
                )
            }
        }
    }

    render(){
        return(
            <div>
                <div>
                    {/* <img src={this.props.cv.cvData.image} alt="user"/> */}
                    {this.renderImage()}
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