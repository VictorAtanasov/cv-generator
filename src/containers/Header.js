import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../actions/userActions';
import AuthButton from '../components/AuthButton';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.ifUser = this.ifUser.bind(this);
        this.handleSignOut = this.handleSignOut.bind(this);
    }

    componentWillMount(){
        this.props.getUser()
    }

    handleSignOut(e){
        this.props.logOut()
            .then(() =>{
                console.log('success');
                window.location.href = '/';
            })
            .catch((err) =>{
                console.log(err)
            })
    }

    ifUser(){
        if(this.props.user.displayName){
            return(
                <div>
                    <span>{`Hi ${this.props.user.displayName}`}</span>
                    <div>
                        <AuthButton className="btn btn-danger" text="Sign Out" onClick={this.handleSignOut} />
                    </div>
                </div>
            )
        } else if(this.props.user.email){
            return(
                <div>
                    <span>{`Hi ${this.props.user.email}`}</span>
                    <div>
                        <AuthButton className="btn btn-danger" text="Sign Out" onClick={this.handleSignOut} />
                    </div>
                </div>
            )
        }
    }

    render(){
        return(
            <div>
                <div>
                    <ul>                        
                        <Link to="/">
                            <li>
                                Home
                            </li>
                        </Link>
                        <Link to="/logIn">
                            <li>
                                Log In
                            </li>
                        </Link>
                        <Link to="/signUp">
                            <li>
                                Sign Up
                            </li>
                        </Link>
                        <Link to={`/cv/${this.props.user.uid}`}>
                            <li>
                                Your CV
                            </li>
                        </Link>
                    </ul>
                    {this.ifUser()}
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


export default connect(mapStateToProps, mapDispatchToProps)(Header)