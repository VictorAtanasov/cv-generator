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
        this.showInnerPopOverOptions = this.showInnerPopOverOptions.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);           
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    pushData(e){
        let userUid = this.props.userInfo.userUid;
        let key = e.target.id;
        let data = e.target.value;
        this.props.setData(userUid, key, data)
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({
                componentOptions: 'hidden',
                innerComponentOptions: 'hidden'
            })
        } else{
            this.setState({
                componentOptions: 'active-cv-state',
            })
        }
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
                ref={this.setWrapperRef}
            >
                <div className="headerPopOverWrapper">
                    <Paper 
                        zDepth={1}
                        className={`${this.state.componentOptions} headerPopOver`}
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
                        styles={
                            {
                                color: this.props.cv.cvData.styles['main-color'],
                                fontFamily: this.props.cv.cvData.styles['font-family']
                            }
                        }
                    />
                </div>
                <div className="cv-role-wrapper">
                    <CvTextAreaTitle 
                        type="text"
                        name={this.props.cv.role || "Your Next Desired Role?"}
                        placeholder="Your Next Desired Role?"
                        onBlur={ this.pushData }
                        className="cv-role"
                        styles={
                            {
                                color: this.props.cv.cvData.styles['secondary-color'],
                                fontFamily: this.props.cv.cvData.styles['font-family']
                            }
                        }
                        id="role"
                    />
                </div>
                <div className="header-additional-info">
                    <div className={this.props.cv.cvData.headerConfig.phone === true ? "cv-header-input-wrapper" : "hidden"}>
                        <FontAwesomeCvPage font="phone" color={{color: this.props.cv.cvData.styles['secondary-color']}} />
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
                        <FontAwesomeCvPage font="link" color={{color: this.props.cv.cvData.styles['secondary-color']}} />
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
                        <FontAwesomeCvPage font="envelope-o" color={{color: this.props.cv.cvData.styles['secondary-color']}} />
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
                        <FontAwesomeCvPage font="map-marker" color={{color: this.props.cv.cvData.styles['secondary-color']}} />
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