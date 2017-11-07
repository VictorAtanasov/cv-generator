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
        this.props.pushData(userUid, key, data)
    }


    render(){
        return(
            <div>
                <div className="test2">
                    <div className="test">
                        <CVtextarea type="text"
                                name={ this.props.cv[this.props.title] || 'Title'}
                                placeholder="Title"
                                onBlur={ this.pushData }
                                className="cv-header-input"
                                id={this.props.title}
                        />
                    </div>
                    <div>
                        <CVtextarea type="text"
                                name={this.props.cv[this.props.company] || "Company Name"}
                                placeholder="Company Name"
                                onBlur={ this.pushData }
                                className="cv-header-input"
                                id={this.props.company}
                        />
                    </div>
                    <div>
                        <CVtextarea type="text"
                                name={this.props.cv[this.props.desc] || "Company Description"}
                                placeholder="Company Description"
                                onBlur={ this.pushData }
                                className="cv-header-input"
                                id={this.props.desc}
                        />
                    </div>
                </div>
            </div>
        )
    }
}