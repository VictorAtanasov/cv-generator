import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cvActions from '../actions/cvActions';
import CVstandartComponent from '../components/CVcomponents/CVstandartComponent';
import _ from 'lodash';
import '../App.css';

class CVstandartContainer extends React.Component{
    
        constructor(props){
            super(props);
    
            this.addNewComp = this.addNewComp.bind(this);
        }
    
        renderComponents(){
            return _.map(this.props.cv.cvData[this.props.type], (comp, key) => {
                return <CVstandartComponent
                            {...this.props}
                            userInfo={this.props.userInfo} 
                            key = { key }
                            id = { key }
                            type = {this.props.type}
                        />
            })
        }
    
        addNewComp(){
            let data = {
                company: 'company',
                description: 'description',
                title: 'title',
                date: 'Date period',
                location: 'location',
                achievments: {
                    '-KyQi5jtW3WhuV9kdqNW': {
                        achievment: 'achievment'
                    }
                }
            };
            this.props.pushData(this.props.userInfo.userUid, this.props.type, data)
        }
        
        render(){
            return(
                <div>
                    <h2>
                        Experience
                    </h2>
                    <button onClick={this.addNewComp}>Add new</button>
                    {this.renderComponents()}
                </div>
            )
        }
}

function mapStateToProps(state){
    return{
        cv: state.cv
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(cvActions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(CVstandartContainer)