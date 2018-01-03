import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import download from '../images/download.png';
import create from '../images/create.png';
import FontAwesome from '../components/FontAwesomeCvPage';

export const Home = (props) => {

    return(
        <div className="home-page-wrapper">
            <div className="home-header-wrapper">
                <div className="home-header">
                    <div>
                        <h2>
                            CV Monster
                        </h2>
                    </div>
                    <div>
                        <h4>
                            The resume that opens doors for you
                        </h4>
                    </div>
                    <div>
                        <p>
                            Show who you are both as a professional and an individual
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="home-white-box">
                    <h3>Land your next CV in 2 easy steps</h3>
                    <div className="steps-wrapper">
                        <div className="step">
                            <img src={create} alt=""/>
                            <h4>Create your custom CV</h4>
                        </div>
                        <div className="step">
                            <img src={download} alt=""/>
                            <h4>Download it as PDF</h4>
                        </div>
                    </div>
                    <Link to="/registration">
                        <RaisedButton 
                            label='Craft Your Resume Now'
                            backgroundColor='#3e94e4'
                            labelColor='#fff'
                        />
                    </Link>
                </div>
                <div className="home-features">
                    <div>
                        <FontAwesome font="pencil" />
                        <h4>
                            Simple editing
                        </h4>
                        <p>
                            Make changes straight on the page and see a preview of the resume without downloading it.
                        </p>
                    </div>
                    <div>
                        <FontAwesome font="graduation-cap" />
                        <h4>
                            No learning curve
                        </h4>
                        <p>
                            Each step of building your resume is so natural, you don’t have to figure things out on your own.
                        </p>
                    </div>
                    <div>
                        <FontAwesome font="star" />
                        <h4>
                            A memorable resume
                        </h4>
                        <p>
                            The distinct visual style will make people remember you and the key things about you, even in a pile of resumes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
