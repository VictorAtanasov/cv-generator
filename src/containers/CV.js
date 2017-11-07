import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cvActions from '../actions/cvActions';
import CVheader from '../components/CVcomponents/CVheader';
import CVexperience from '../components/CVcomponents/CVexperience';
import '../App.css';

class CV extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            numChildren: this.props.cv.numberOfExperience || 1
        }

        this.append = this.append.bind(this);
    }

    append(){
        this.setState({
            numChildren: this.state.numChildren + 1
        });
        this.props.pushData(this.props.userInfo.userUid, 'numberOfExperience', this.state.numChildren + 1)
    }
    
    render(){
        const children = [];
        
        for (var i = 1; i < this.state.numChildren; i += 1) {
            children.push(
                <CVexperience 
                    {...this.props} 
                    userInfo={this.props.userInfo}  
                    title={'experienceTitle'+i} 
                    company={'companyName'+i} 
                    desc={'companyDescription'+i}
                    key={i}
                />
            );
        };


        return(
            <div>
                <div className="CVconainerWrapper">
                    <h2>
                        CV Container
                    </h2>
                    <div className="componentWarpper">
                        <CVheader {...this.props} userInfo={this.props.userInfo} />
                        <div>
                            <h2>
                                Experience
                            </h2>
                            <button onClick={this.append}>Bahti</button>
                            <CVexperience 
                                {...this.props} 
                                userInfo={this.props.userInfo} 
                                title='experienceTitle' 
                                company='companyName' 
                                desc='companyDescription'
                            />
                            {children}
                        </div>
                    </div>
                </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(CV)