import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions';
import InputField from '../components/forms/InputField';
import AuthButton from '../components/AuthButton';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

class Registration extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            activeTab: '1'
        }

        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.toggle = this.toggle.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

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
                console.log(err)
            })
        this.refs.logInForm.reset()
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
            <div className="registration-page-wrapper">
                <div className="registration-header-wrapper">
                    <div className="registration-header">
                        <div className="image-container">

                        </div>
                        <div className="tabs-container">    
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
                                                    <AuthButton color="primary" type="submit" text="Log In" />
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
                                                    <AuthButton color="primary" type="submit" text="Sign Up" />
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