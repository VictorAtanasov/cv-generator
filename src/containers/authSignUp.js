import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions';
import InputField from '../components/InputField';
import AuthButton from '../components/AuthButton';


class authSignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    handleSignUp(e){
        e.preventDefault();
        this.props.signUp(this.state.email, this.state.password, this.state.name)
            .then((userUid) => {
                this.props.history.replace(`/cv/${userUid}`)
            })
            .catch((err) => {
                console.log(err);
            });
        this.refs.signUpForm.reset();
    }

    render(){
        return(
            <div>
                <h2>
                    SignUp
                </h2>
                <form ref="signUpForm" onSubmit={this.handleSignUp}>
                    <InputField type="text" className="signUpInput" id="email" placeholder="Email"
                        inputAction={(event) => this.setState({email: event.target.value})} />
                    <InputField type="password" className="signUpInput" id="password" placeholder="Password"
                        inputAction={(event) => this.setState({password: event.target.value})} />
                    <InputField type="text" className="signUpInput" id="name" placeholder="User Name"
                        inputAction={(event) => this.setState({name: event.target.value})} />
                    <AuthButton className="btn btn-primary" type="submit" text="Sign Up" />
                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(userActions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(authSignUp)