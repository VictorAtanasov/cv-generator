import React from 'react';
import CVtextarea from '../CVcomponents/CVtextarea';


export default class CVheader extends React.Component{
    constructor(props){
        super(props);

        this.pushData = this.pushData.bind(this);
    }

    pushData(e){
        console.log(e.target.value)
        let userUid = this.props.userInfo.userUid;
        let key = e.target.id;
        let data = e.target.value;
        this.props.pushData(userUid, key, data)
    }

    render(){
        return(
            <div>
                CVheader
                <CVtextarea type="text"
                        name={this.props.cv.cvData.fullName}
                        placeholder="Your Name"
                        onBlur={ this.pushData }
                        className="toto"
                        id="fullName"
                />
                <CVtextarea type="text"
                        name={this.props.cv.cvData.role}
                        placeholder="Your Next Desired Role?"
                        onBlur={ this.pushData }
                        className="toto"
                        id="role"
                />
                <CVtextarea type="text"
                        name={this.props.cv.cvData.phone}
                        placeholder="Phone"
                        onBlur={ this.pushData }
                        className="toto"
                        id="phone"
                />
                <CVtextarea type="text"
                        name={this.props.cv.cvData.website}
                        placeholder="Website/Link"
                        onBlur={ this.pushData }
                        className="toto"
                        id="website"
                />
                <CVtextarea type="text"
                        name={this.props.cv.cvData.email}
                        placeholder="E-Mail"
                        onBlur={ this.pushData }
                        className="toto"
                        id="email"
                />
                <CVtextarea type="text"
                        name={this.props.cv.cvData.location}
                        placeholder="Location"
                        onBlur={ this.pushData }
                        className="toto"
                        id="location"
                />
            </div>
        )
    }
}