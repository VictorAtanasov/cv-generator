import React from 'react';
import CvTextarea from '../forms/CvTextarea';
import CvTextAreaTitle from '../forms/CvTextAreaTitle';
import CvPhoto from './CvPhoto';
import FontAwesomeCvPage from '../FontAwesomeCvPage';
import Paper from 'material-ui/Paper';
import CvInnerPopOverHeader from './CvInnerPopOverHeader';

export default class CvHeader extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            componentOptions: 'hidden',
            innerComponentOptions: 'hidden',
        }

        this.pushData = this.pushData.bind(this);
        this.showPopOver = this.showPopOver.bind(this);
        this.hidePopOver = this.hidePopOver.bind(this);
        this.showInnerPopOverOptions = this.showInnerPopOverOptions.bind(this);
    }

    pushData(e){
        let userUid = this.props.userInfo.userUid;
        let key = e.target.id;
        let data = e.target.value;
        this.props.setData(userUid, key, data)
    }

    showPopOver(){
        this.setState({
            componentOptions: 'active-cv-state'
        })
    }

    hidePopOver(){
        this.setState({
            componentOptions: 'hidden',
            innerComponentOptions: 'hidden'
        })
    }

    showInnerPopOverOptions(){
        if(this.state.innerComponentOptions === 'hidden'){
            this.setState({
                innerComponentOptions: 'headerInnerPopOver'
            })
        } else{
            this.setState({
                innerComponentOptions: 'hidden'
            })
        }
    }

    render(){
        return(
            <div 
                className="cv-header-wrapper"
                onMouseEnter={this.showPopOver}
                onMouseLeave={this.hidePopOver}
            >
                <div className="headerPopOverWrapper">
                    <Paper 
                        zDepth={1}
                        className={this.state.componentOptions + ' ' + 'headerPopOver'}
                    >
                        <span onClick={this.showInnerPopOverOptions}>
                            <FontAwesomeCvPage font='cog' />
                        </span>
                    </Paper>
                    <CvInnerPopOverHeader
                        className={this.state.innerComponentOptions}
                        {...this.props}
                        id='headerConfig'
                    />
                </div>
                <CvPhoto 
                    userInfo={this.props.userInfo.userUid} 
                    className={this.props.cv.cvData.headerConfig.photo === true ? 'block' : 'hidden'}
                />
                <div className="cv-name-wrapper">
                    <CvTextAreaTitle 
                        type="text"
                        name={this.props.cv.name || "Your Name"}
                        placeholder="Your Name"
                        onBlur={ this.pushData }
                        className="cv-name"
                        id="name"
                    />
                </div>
                <div className="cv-role-wrapper">
                    <CvTextAreaTitle 
                        type="text"
                        name={this.props.cv.role || "Your Next Desired Role?"}
                        placeholder="Your Next Desired Role?"
                        onBlur={ this.pushData }
                        className="cv-role"
                        id="role"
                    />
                </div>
                <div>
                    <div className={this.props.cv.cvData.headerConfig.phone === true ? "cv-header-input-wrapper" : "hidden"}>
                        <FontAwesomeCvPage font="phone" />
                        <CvTextarea 
                            type="text"
                            name={this.props.cv.phone}
                            placeholder="Phone"
                            onBlur={ this.pushData }
                            className="cv-header-input"
                            id="phone"
                        />
                    </div>
                    <div className={this.props.cv.cvData.headerConfig.website === true ? "cv-header-input-wrapper" : "hidden"}>
                        <FontAwesomeCvPage font="link" />
                        <CvTextarea 
                            type="text"
                            name={this.props.cv.website}
                            placeholder="Website/Link"
                            onBlur={ this.pushData }
                            className="cv-header-input"
                            id="website"
                        />
                    </div>
                    <div className={this.props.cv.cvData.headerConfig.email === true ? "cv-header-input-wrapper" : "hidden"}>
                        <FontAwesomeCvPage font="envelope-o" />
                        <CvTextarea 
                            type="text"
                            name={this.props.cv.email}
                            placeholder="E-Mail"
                            onBlur={ this.pushData }
                            className="cv-header-input"
                            id="email"
                        />
                    </div>
                    <div className={this.props.cv.cvData.headerConfig.location === true ? "cv-header-input-wrapper" : "hidden"}>
                        <FontAwesomeCvPage font="map-marker" />
                        <CvTextarea 
                            type="text"
                            name={this.props.cv.location}
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