import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cvActions from '../../actions/cvActions';
import {RaisedButton, Dialog, FlatButton, LinearProgress} from 'material-ui';
import profilePic from '../../images/profile-pic.svg'

class Photo extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            imageUploaderClass: 'hidden',
            open: false,
            uploading: false,
        }

        this.pushImage = this.pushImage.bind(this);
        this.showImageUploader = this.showImageUploader.bind(this);
        this.hideImageUploader = this.hideImageUploader.bind(this);
    }

    pushImage(e){
        this.setState({
            uploading: true
        })
        let file = e.target.files[0];
        this.props.uploadImage(this.props.userInfo, file)
            .then(() => {
                this.refs.fileForm.reset();
                this.handleClose();
                this.setState({
                    uploading: false
                })
            })
    }

    handleOpen = () => {
        this.setState({open: true});
    };
    
    handleClose = () => {
        this.setState({open: false});
    };

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

    render(){
        const styles = {
            button: {
              margin: 12,
            },
            imageInput: {
              cursor: 'pointer',
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              width: '100%',
              opacity: 0,
            },
        };
        const actions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this.handleClose}
            />,
            <form ref="fileForm">
                <RaisedButton
                    label="Choose an Image"
                    labelPosition="before"
                    style={styles.button}
                    containerElement="label"
                >
                    <input type="file" style={styles.imageInput} onChange={this.pushImage}/>
                </RaisedButton>
            </form>
        ];
        return(
            <div className="photo-wrapper">
                <div onClick={this.handleOpen}>
                    <img src={this.props.cv.cvData.image !== '' ? this.props.cv.cvData.image : profilePic} alt="user"/>
                </div>
                <Dialog
                    title="Chooce Image for Your CV"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                    {this.state.uploading ? <LinearProgress mode="indeterminate" /> : ''}
                </Dialog>
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