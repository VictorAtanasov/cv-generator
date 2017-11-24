import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../actions/userActions';
import AuthButton from '../components/AuthButton';
import logo from '../images/logo.png';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import {FontAwesomeSpinner} from '../components/FontAwesomeSpinner';

class Header extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
          dropdownOpen: false
        };

        this.toggle = this.toggle.bind(this);
        this.ifRegUser = this.ifRegUser.bind(this);
        this.handleSignOut = this.handleSignOut.bind(this);
    }

    toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
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

    ifRegUser(){
        if(!this.props.user.loading){
            if(this.props.user.email){
                return(
                    <div className="header-menu-items">
                        <Link to="/">Home</Link>
                        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
                            <DropdownToggle caret outline color="primary">
                                {this.props.user.displayName}
                            </DropdownToggle>
                            <DropdownMenu>
                                <Link to={`/cv/${this.props.user.uid}`}>
                                    <DropdownItem>Your CV</DropdownItem>
                                </Link>
                                <DropdownItem divider />
                                <DropdownItem onClick={this.handleSignOut}>
                                    Sign Out
                                </DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                    </div>
                )
            } else{
                return(
                    <div className="header-menu-items">
                        <Link to="/">
                            Home
                        </Link>
                        <Link to="/registration">
                            <Button outline color="primary">
                                Log In
                            </Button>
                        </Link>
                    </div>
                )
            }
        }
    }

    render(){
        return(
            <div className="header-wrapper">
                <div className="header">
                    <div className="header-logo">
                        <Link to ="/">
                            <img src={logo} alt="deiba"/>
                        </Link>
                    </div>
                    <div className="header-menu-items-wrapper">
                        {this.ifRegUser()}
                    </div>
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