import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions';
import InputField from '../components/InputField';
import AuthButton from '../components/AuthButton';

class authLogIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleSignOut = this.handleSignOut.bind(this);
    }

    componentWillMount(){
        this.props.getUser()
    }

    handleLoginSubmit(e){
        e.preventDefault();

        this.props.logIn(this.state.email, this.state.password)
            .then((userUid) =>{
                console.log(userUid)
            })
            .catch((err) =>{
                console.log(err)
            })
        this.refs.logInForm.reset()
    }

    handleSignOut(e){
        console.log(42)
        this.props.logOut()
    }

    render(){
        return(
            <div>
                <h2>
                    Log In
                </h2>
                <div>
                    <form ref="logInForm" onSubmit={this.handleLoginSubmit}>
                        <InputField type="text" className="logInInput" id="email" placeholder="Email"
                            inputAction={(event) => this.setState({email: event.target.value})} />
                        <InputField type="password" className="logInInput" id="password" placeholder="Password"
                            inputAction={(event) => this.setState({password: event.target.value})} />
                        <AuthButton className="btn btn-primary" type="submit" text="Log In" />
                    </form>
                </div>
                <div>
                    <AuthButton className="btn btn-danger" text="Sign Out" onClick={this.handleSignOut} />
                </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(authLogIn)