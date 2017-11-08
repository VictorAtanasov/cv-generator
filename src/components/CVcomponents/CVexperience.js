import React from 'react';
import CVtextarea from '../CVcomponents/CVtextarea';
import FontAwesomeCVPage from '../FontAwesomeCVPage';
import '../../App.css';

export default class CVexperience extends React.Component{
    constructor(props){
        super(props);

        this.pushData = this.pushData.bind(this);
    }

    pushData(e){
        let userUid = this.props.userInfo.userUid;
        let key = e.target.id;
        let data = e.target.value;
        let componentId = this.props.id;
        this.props.setMultipleComponentData(userUid, 'experience', componentId, key, data)
    }


    render(){
        return(
            <div>
                <div className="test2">
                    <div className="test">
                        <CVtextarea type="text"
                                name={ this.props.cv.experience[this.props.id].title || 'Title'}
                                placeholder="Title"
                                onBlur={ this.pushData }
                                className="cv-header-input"
                                id="title"
                        />
                    </div>
                    <div>
                        <CVtextarea type="text"
                                name={this.props.cv.experience[this.props.id].company || "Company Name"}
                                placeholder="Company Name"
                                onBlur={ this.pushData }
                                className="cv-header-input"
                                id="company"
                        />
                    </div>
                    <div>
                        <CVtextarea type="text"
                                name={this.props.cv.experience[this.props.id].description || "Company Description"}
                                placeholder="Company Description"
                                onBlur={ this.pushData }
                                className="cv-header-input"
                                id="description"
                        />
                    </div>
                </div>
            </div>
        )
    }
}