import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../actions/userActions';
import {FlatButton, RaisedButton, Popover, Menu, MenuItem} from 'material-ui';
import logo from '../images/logo.png';

class Header extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
          dropdownOpen: false,
          open: false,
        };

        this.ifRegUser = this.ifRegUser.bind(this);
        this.handleSignOut = this.handleSignOut.bind(this);
        this.handleTouchTap = this.handleTouchTap.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
    }

    handleTouchTap = (event) => {
        event.preventDefault();
        if (this.state.open === true){
            this.setState({
                open: false,
            });
        }else{
            this.setState({
                open: true,
                anchorEl: event.currentTarget,
            });
        }
    };
    
    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    componentWillMount(){
        this.props.getUser()
    }

    handleSignOut(e){
        this.props.logOut()
            .then(() =>{
                window.location.href = '/';
            })
            .catch((err) =>{
                console.log(err)
            })
    }

    ifRegUser(){
        const style = {
            margin: 12
        };
        if(!this.props.user.loading){
            if(this.props.user.email){
                return(
                    <div className="header-menu-items">
                            <Link to="/">
                                <FlatButton 
                                    label="Home" 
                                    hoverColor="none"
                                    rippleColor="none"
                                    className="header-home-btn"
                                />
                            </Link>                        
                        <div>
                            <RaisedButton
                                className="menu-btn"
                                onClick={this.handleTouchTap}
                                label={this.props.user.displayName ? this.props.user.displayName : 'Hello'}
                            />
                            <Popover
                                open={this.state.open}
                                anchorEl={this.state.anchorEl}
                                anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                                onRequestClose={this.handleRequestClose}
                            >
                            <Menu>
                                <Link to={`/cv/${this.props.user.uid}`} onClick={this.handleRequestClose}>
                                    <MenuItem primaryText="Your CV"/>
                                </Link>
                                <MenuItem primaryText="Sign Out" onClick={this.handleSignOut} />
                            </Menu>
                            </Popover>
                        </div>
                    </div>
                )
            } else{
                return(
                    <div className="header-menu-items">
                        <Link to="/">
                            <FlatButton 
                                label="Home" 
                                hoverColor="none"
                                rippleColor="none"
                                className="header-home-btn"
                            />
                        </Link>
                        <Link to="/registration">
                            <RaisedButton label="Registration" style={style} />
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