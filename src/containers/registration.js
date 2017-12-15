import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions';
import InputField from '../components/forms/InputField';
import AuthButton from '../components/AuthButton';
import {TabContent, TabPane, Nav, NavItem, NavLink, Row, Col} from 'reactstrap';
import classnames from 'classnames';
import Snackbar from 'material-ui/Snackbar';

class Registration extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            activeTab: '1',
            message: '',
            open: false
        }

        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.toggle = this.toggle.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.dismissAlert = this.dismissAlert.bind(this);
        this.handleTouchTap = this.handleTouchTap.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
    }

    handleTouchTap = () => {
        this.setState({
          open: true,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
    }

    handleLoginSubmit(e){
        e.preventDefault();
        this.props.logIn(this.state.email, this.state.password)
            .then((userUid) =>{
                this.props.history.replace(`/cv/${userUid}`);
            })
            .catch((err) =>{
                if(err.code === "auth/user-not-found"){
                    this.setState({
                        message: 'Wrong Email Entered'
                    })
                } else{
                    this.setState({
                        message: 'Wrong Password Entered'
                    })
                }
                this.setState({
                    open: true
                })
            })
        this.refs.logInForm.reset()
    }

    handleSignUp(e){
        e.preventDefault();
        if(this.state.name !== ''){
            this.props.signUp(this.state.email, this.state.password, this.state.name)
            .then((userUid) => {
                this.props.history.replace(`/cv/${userUid}`)
            })
            .catch((err) => {
                this.setState({
                    message: err.message
                })
                this.setState({
                    open: true
                })
            });
        } else{
            this.setState({
                message: 'Username is required'
            })
            this.setState({
                open: true
            })
        }
        
        this.refs.signUpForm.reset();
    }

    dismissAlert() {
        this.setState({ visible: false });
    }

    render(){
        const style = {
            background: '#B22222'
        };
        return(
            <div className="registration-page-wrapper">
                <div className="registration-header-wrapper">
                    <div className="registration-header">
                        {/* <div className="image-container"></div> */}
                        <div className="tabs-container">
                            <Snackbar
                                open={this.state.open}
                                message={this.state.message}
                                bodyStyle={style}
                                onRequestClose={this.handleRequestClose}
                            />
                            <div className="tabs">
                                <Nav tabs>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: this.state.activeTab === '1' })}
                                            onClick={() => { this.toggle('1'); }}
                                        >
                                            Log In
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: this.state.activeTab === '2' })}
                                            onClick={() => { this.toggle('2'); }}
                                        >
                                            Sign Up
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                        <Row>
                                            <Col sm="12">
                                                <form ref="logInForm" onSubmit={this.handleLoginSubmit}>
                                                    <InputField type="text" className="logInInput" id="email" placeholder="Email"
                                                        inputAction={(event) => this.setState({email: event.target.value})} />
                                                    <InputField type="password" className="logInInput" id="password" placeholder="Password"
                                                        inputAction={(event) => this.setState({password: event.target.value})} />
                                                    <AuthButton type="submit" text="Log In" />
                                                </form>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <Row>
                                            <Col sm="12">
                                                <form ref="signUpForm" onSubmit={this.handleSignUp}>
                                                    <InputField type="text" className="signUpInput" id="email" placeholder="Email"
                                                        inputAction={(event) => this.setState({email: event.target.value})} />
                                                    <InputField type="password" className="signUpInput" id="password" placeholder="Password"
                                                        inputAction={(event) => this.setState({password: event.target.value})} />
                                                    <InputField type="text" className="signUpInput" id="name" placeholder="User Name"
                                                        inputAction={(event) => this.setState({name: event.target.value})} />
                                                    <AuthButton type="submit" text="Sign Up" />
                                                </form>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                </TabContent>
                            </div>
                        </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(Registration)