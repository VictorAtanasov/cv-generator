import React from 'react';
import CvTextareaMultiLine from '../forms/CvTextareaMultiLine';

export default class CvSummaryComponent extends React.Component{
    constructor(props){
        super(props);

        this.pushData = this.pushData.bind(this);
    }

    pushData(e){
        let userUid = this.props.userInfo.userUid;
        let key = e.target.id;
        let data = e.target.value;
        let componentId = '-KiQi5jtW3WheV2kdqNA';
        this.props.setMultipleComponentData(userUid, 'summary', componentId, key, data);
    }

    
    render(){
        const data = this.props.cv.cvData.summary['-KiQi5jtW3WheV2kdqNA'];
        return(
            <div className="experienceWarpper">
                <div>
                    <div>
                        <CvTextareaMultiLine 
                            type="text"
                            name={data.summary}
                            placeholder="Title"
                            onBlur={this.pushData}
                            className="multiline-textarea"
                            id="summary"
                        />
                    </div>
                </div>
            </div>
        )
    }
}