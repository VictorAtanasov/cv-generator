import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cvActions from '../actions/cvActions';
import CVexperience from '../components/CVcomponents/CVexperience';
import _ from 'lodash';
import '../App.css';

class CVexperienceContainer extends React.Component{
    
        constructor(props){
            super(props);
    
            this.addNewComp = this.addNewComp.bind(this);
        }
    
        experienceComps(){
            return _.map(this.props.cv.experience, (experience, key) => {
                return <CVexperience
                            {...this.props}
                            userInfo={this.props.userInfo} 
                            key = { key }
                            id = { key }
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
                achievments: 'achievments'
            };
            this.props.pushData(this.props.userInfo.userUid, 'experience', data)
        }
        
        render(){
            return(
                <div>
                    <h2>
                        Experience
                    </h2>
                    <button onClick={this.addNewComp}>Add Experience</button>
                    {this.experienceComps()}
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


export default connect(mapStateToProps, mapDispatchToProps)(CVexperienceContainer)