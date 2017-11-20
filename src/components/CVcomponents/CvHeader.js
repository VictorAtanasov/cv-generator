import React from 'react';
import CvTextarea from '../forms/CvTextarea';
import FontAwesomeCvPage from '../FontAwesomeCvPage';
import '../../App.css';


export default class CvHeader extends React.Component{
    constructor(props){
        super(props);

        this.pushData = this.pushData.bind(this);
    }

    pushData(e){
        let userUid = this.props.userInfo.userUid;
        let key = e.target.id;
        let data = e.target.value;
        this.props.setData(userUid, key, data)
    }

    render(){
        return(
            <div>
                <h2>
                    Header
                </h2>
                <div>
                    <div>
                        <CvTextarea 
                            type="text"
                            name={this.props.cv.name || "Your Name"}
                            placeholder="Your Name"
                            onBlur={ this.pushData }
                            className="cv-header-input"
                            id="name"
                        />
                    </div>
                    <div>
                        <CvTextarea 
                            type="text"
                            name={this.props.cv.role || "Your Next Desired Role?"}
                            placeholder="Your Next Desired Role?"
                            onBlur={ this.pushData }
                            className="cv-header-input"
                            id="role"
                        />
                    </div>
                    <div>
                        <FontAwesomeCvPage font="phone" />
                        <CvTextarea 
                            type="text"
                            name={this.props.cv.phone || "Phone"}
                            placeholder="Phone"
                            onBlur={ this.pushData }
                            className="cv-header-input"
                            id="phone"
                        />
                    </div>
                    <div>
                        <FontAwesomeCvPage font="link" />
                        <CvTextarea 
                            type="text"
                            name={this.props.cv.website || "Website/Link"}
                            placeholder="Website/Link"
                            onBlur={ this.pushData }
                            className="cv-header-input"
                            id="website"
                        />
                    </div>
                    <div>
                        <FontAwesomeCvPage font="envelope-o" />
                        <CvTextarea 
                            type="text"
                            name={this.props.cv.email || "E-Mail"}
                            placeholder="E-Mail"
                            onBlur={ this.pushData }
                            className="cv-header-input"
                            id="email"
                        />
                    </div>
                    <div>
                        <FontAwesomeCvPage font="map-marker" />
                        <CvTextarea 
                            type="text"
                            name={this.props.cv.location || "Location"}
                            placeholder="Location"
                            onBlur={ this.pushData }
                            className="cv-header-input"
                            id="location"
                        />
                    </div>
                </div>
            </div>
        )
    }
}