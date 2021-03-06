import React from 'react';
import {Paper, Toggle} from 'material-ui';
import _ from 'lodash';


export default class CvInnerPopOverHeader extends React.Component {
    constructor(props){
        super(props);

        this.renderIcons = this.renderIcons.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    renderIcons(){
        return _.map(this.props.cv.cvData[this.props.id], (option, key) => {
            return <Toggle
                        label={key}
                        key={key}
                        data-istoggled={key}
                        onToggle={this.toggle}
                        toggled={option}
                    />
        })
    }

    toggle(e, isInputChecked){
        let key = e.target.getAttribute('data-isToggled');
        this.props.setComponentData(this.props.userInfo.userUid, this.props.id, key, isInputChecked);
    }

    render(){
        const style = {
            height:'auto',
            width: 'auto',
            padding: '10px 20px',
            textAlign: 'center',
            position: 'absolute',
            left: '50%',
            zIndex: 999,
        };
        return(
            <div className={this.props.className}>
                <Paper zDepth={3} style={style}>
                   {this.renderIcons()}
                </Paper>
            </div>
        )
    }
}
