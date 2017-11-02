import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions';

class Header extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.getUser();
    }

    render(){
        return(
            <div>
                <div>
                    Header
                </div>
                <div>
                    <ul>
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
                    </ul>
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