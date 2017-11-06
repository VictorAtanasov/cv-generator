import React from 'react';
import CVtextarea from '../CVcomponents/CVtextarea';
import FontAwesomeCVPage from '../FontAwesomeCVPage';
import '../../App.css';


export default class CVheader extends React.Component{
    constructor(props){
        super(props);

        this.pushData = this.pushData.bind(this);
    }

    pushData(e){
        let userUid = this.props.userInfo.userUid;
        let key = e.target.id;
        let data = e.target.value;
        this.props.pushData(userUid, key, data)
    }

    render(){
        return(
            <div>
                <h2>
                    CVheader
                </h2>
                <div>
                    <CVtextarea type="text"
                            name={this.props.cv.cvData.fullName}
                            placeholder="Your Name"
                            onBlur={ this.pushData }
                            className="cv-header-input"
                            id="fullName"
                    />
                </div>
                <div>
                    <CVtextarea type="text"
                            name={this.props.cv.cvData.role}
                            placeholder="Your Next Desired Role?"
                            onBlur={ this.pushData }
                            className="cv-header-input"
                            id="role"
                    />
                </div>
                <div>
                    <FontAwesomeCVPage font="phone" />
                    <CVtextarea type="text"
                            name={this.props.cv.cvData.phone}
                            placeholder="Phone"
                            onBlur={ this.pushData }
                            className="cv-header-input"
                            id="phone"
                    />
                </div>
                <div>
                    <FontAwesomeCVPage font="link" />
                    <CVtextarea type="text"
                            name={this.props.cv.cvData.website}
                            placeholder="Website/Link"
                            onBlur={ this.pushData }
                            className="cv-header-input"
                            id="website"
                    />
                </div>
                <div>
                    <FontAwesomeCVPage font="envelope-o" />
                    <CVtextarea type="text"
                            name={this.props.cv.cvData.email}
                            placeholder="E-Mail"
                            onBlur={ this.pushData }
                            className="cv-header-input"
                            id="email"
                    />
                </div>
                <div>
                    <FontAwesomeCVPage font="map-marker" />
                    <CVtextarea type="text"
                            name={this.props.cv.cvData.location}
                            placeholder="Location"
                            onBlur={ this.pushData }
                            className="cv-header-input"
                            id="location"
                    />
                </div>
            </div>
        )
    }
}