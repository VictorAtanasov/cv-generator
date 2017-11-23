import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cvActions from '../../actions/cvActions';

class Photo extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            imageUploaderClass: 'hidden'
        }

        this.pushImage = this.pushImage.bind(this);
        this.renderImage = this.renderImage.bind(this);
        this.showImageUploader = this.showImageUploader.bind(this);
        this.hideImageUploader = this.hideImageUploader.bind(this);
    }

    pushImage(e){
        let file = e.target.files[0];
        this.props.uploadImage(this.props.userInfo, file)
            .then(() => {
                this.refs.fileForm.reset()
            })
    }

    showImageUploader(){
        this.setState({
            imageUploaderClass: 'block'
        })
    }

    hideImageUploader(){
        this.setState({
            imageUploaderClass: 'hidden'
        })
    }



    renderImage(){
        if(this.props.cv.cvData){
            if(this.props.cv.cvData.image !== ' '){
                return(
                    <div onClick={this.showImageUploader}>
                        <img src={this.props.cv.cvData.image} alt="user"/>
                    </div>
                )
            } else {
                return(
                    <div onClick={this.showImageUploader}>
                        <img src="https://app.enhancv.com/b7e44f9da8257826e8dd86a243c2ec6b.svg" alt="user"/>
                    </div>   
                )
            }
        }
    }

    render(){
        return(
            <div>
                <div>
                    {this.renderImage()}
                </div>
                <div className={this.state.imageUploaderClass}>
                    <div>
                        <form ref="fileForm">
                            <input type="file" onChange={this.pushImage}/>
                        </form>
                        <button onClick={this.hideImageUploader}>OK</button>
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


export default connect(mapStateToProps, mapDispatchToProps)(Photo)