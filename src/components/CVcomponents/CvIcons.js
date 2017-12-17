import React from 'react';
import {Paper} from 'material-ui';
import icons from '../../Firebase/icons';
import FontAwesomeCvPage from '../FontAwesomeCvPage';


export default class CvIcons extends React.Component {
    constructor(props){
        super(props);

        this.renderIcons = this.renderIcons.bind(this);
        this.chooseIcon = this.chooseIcon.bind(this);
    }

    renderIcons(){
        return icons.map((icon, key) => {
            return <div key={key} onClick={this.chooseIcon} className="icon-wrapper"><FontAwesomeCvPage font={icon}/></div>
        })
    }

    chooseIcon(e){
        let font = e.target.className;
        font = font.substring(font.indexOf("-") + 1);
        let componentId = this.props.id;
        this.props.setMultipleComponentData(this.props.userInfo.userUid, this.props.type, componentId, 'font', font);
    }

    render(){
        const style = {
            height:'200px',
            width: '250px',
            padding: '10px 20px',
            textAlign: 'center',
            position: 'absolute',
            left: '50%',
            zIndex: 999,
            overflow: 'auto'
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
