import React from 'react';
import CVinput from '../CVcomponents/CVinput';


export default class CVheader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fullName: '',
            role: '',
            phone: '',
            email: '',
            website: '',
            location: ''
        }
        this.pushData = this.pushData.bind(this);
    }

    pushData(e){
        let userUid = this.props.userInfo.userUid;
        let key = e.target.id;
        let data = this.state[key];
        // let data = {
        //     [e.target.id]: this.state[e.target.id]
        // }
        this.props.pushData(userUid, key, data)
    }

    render(){
        return(
            <div>
                CVheader
                <CVinput type="text"
                        inputAction={(event) => this.setState({fullName: event.target.value})} 
                        onBlur={ this.pushData }
                        className="toto"
                        id="fullName"
                />
                <CVinput type="text"
                        inputAction={(event) => this.setState({role: event.target.value})} 
                        onBlur={ this.pushData }
                        className="toto"
                        id="role"
                />
            </div>
        )
    }
}