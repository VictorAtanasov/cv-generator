import React from 'react';
import {findDOMNode} from 'react-dom';
import AuthButton from '../AuthButton';
import CvColorCircle from './CvColorCircle';


export default class CvAside extends React.Component{
    constructor(props){
        super(props);

        this.changeColors = this.changeColors.bind(this);
        this.showColors = this.showColors.bind(this);
    }

    showColors(){
        let el = document.getElementsByClassName('colors')[0];
        if(el.classList.contains('not-active')){
            el.style.maxHeight = el.scrollHeight + 'px';
            el.classList.remove('not-active');
        } else {
            el.style.maxHeight = '0';
            el.classList.add('not-active');
        }
        
    }

    changeColors(ev){
        // this.props.setComponentData(this.props.user, 'styles', 'secondary-color', 'red');
        // this.props.setComponentData(this.props.user, 'styles', 'main-color', 'pink');
        console.log(ev.target.colors)
        
    }

    render(){
        return(
            <div>
                <AuthButton text="Change Colors" onClick={this.showColors} />
                <div className="colors not-active">
                    <CvColorCircle
                        onClick={this.changeColors}
                        colors="black dodgerblue"
                        
                    />

                    {/* <div className="color black" id="black dodgerblue">
                        <div className="secondary-color dodgerblue" id="black dodgerblue"></div>
                    </div>
                    <div className="color black" id="black green" colors="fa da">
                        <div className="secondary-color green" id="black green"></div>
                    </div>
                    <div className="color black">
                        <div className="secondary-color darkviolet" id=""></div>
                    </div>
                    <div className="color black">
                        <div className="secondary-color red"></div>
                    </div>
                    <div className="color black">
                        <div className="secondary-color dimgray"></div>
                    </div>
                    <div className="color black">
                        <div className="secondary-color peru"></div>
                    </div>
                    <div className="color black">
                        <div className="secondary-color violet"></div>
                    </div>
                    <div className="color midnightblue">
                        <div className="secondary-color dodgerblue"></div>
                    </div> */}
                </div>
                <button onClick={this.changeColors}>Change Colors</button>
            </div>
        )
    }
}