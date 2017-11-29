import React from 'react';
import Paper from 'material-ui/Paper';
import Toggle from 'material-ui/Toggle';
import _ from 'lodash';


export default class CvInnerPopOver extends React.Component {
    constructor(props){
        super(props);

        this.renderIcons = this.renderIcons.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    renderIcons(){
        return _.map(this.props.cv.headerConfig, (option, key) => {
            return <Toggle
                        label={key}
                        key={key}
                        onToggle={this.toggle}
                    />
        })
    }

    toggle(e){
        console.log(e)
    }

    render(){
        const style = {
            height: 100,
            width: 100,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
        };
        const stylesToggle = {
            block: {
              maxWidth: 250,
            },
            toggle: {
              marginBottom: 16,
            },
            thumbOff: {
              backgroundColor: '#ffcccc',
            },
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
