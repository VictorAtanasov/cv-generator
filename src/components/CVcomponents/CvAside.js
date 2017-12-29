import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import CvColorCircle from './CvColorCircle';
import CvSections from './CvSections';

export default class CvAside extends React.Component{
    constructor(props){
        super(props);

        this.changeColors = this.changeColors.bind(this);
        this.showColors = this.showColors.bind(this);
        this.showFonts = this.showFonts.bind(this);
        this.renderCircles = this.renderCircles.bind(this);
        this.changeFont = this.changeFont.bind(this);
        this.showComps = this.showComps.bind(this);
        this.printPage = this.printPage.bind(this);
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

    showFonts(){
        let el = document.getElementsByClassName('fonts')[0];
        if(el.classList.contains('not-active')){
            el.style.maxHeight = el.scrollHeight + 'px';
            el.classList.remove('not-active');
        } else {
            el.style.maxHeight = '0';
            el.classList.add('not-active');
        }
    }

    changeColors(ev){
        let colors = ev.target.id.replace(/-border/, '').split(' ');
        this.props.setComponentData(this.props.user, 'styles', 'secondary-color', colors[1]);
        this.props.setComponentData(this.props.user, 'styles', 'main-color', colors[0]);
    }

    changeFont(ev){
        let font = ev.target.id;
        this.props.setComponentData(this.props.user, 'styles', 'font-family', font);
    }

    renderCircles(){
        let arrPrimary = ['black-border', 'midnightblue-border', 'saddlebrown-border',];
        let arrSecondary = ['dodgerblue', 'green', 'darkviolet', 'red', 'dimgray', 'peru', 'violet', 'darkorange', 'cadetblue', 'indianred'];
        let arr = [];
        for(let i = 0; i <= arrPrimary.length - 1; i += 1){
            for(let y = 0; y <= arrSecondary.length - 1; y += 1){
                arr.push(<CvColorCircle
                            onClick={this.changeColors}
                            color1={arrPrimary[i]}
                            color2={arrSecondary[y]}
                            key={arrPrimary[i] + arrSecondary[y]}
                            id={arrPrimary[i] + ' ' + arrSecondary[y]}
                        />);
            }
        }
        return arr
    }

    showComps(){
        let el = document.getElementsByClassName('comps')[0];
        if(el.classList.contains('not-active')){
            el.style.maxHeight = el.scrollHeight + 'px';
            el.classList.remove('not-active');
        } else {
            el.style.maxHeight = '0';
            el.classList.add('not-active');
        }
    }

    printPage(){
        window.print();
    }

    render(){
        return(
            <div>
                <FlatButton 
                    label="Add New Section" 
                    onClick={this.showComps}
                    fullWidth={true}
                    backgroundColor="#fff"
                    rippleColor="#54a7d3"
                    hoverColor="#fff"
                />
                <div className="comps not-active">
                    <CvSections {...this.props}/>
                </div>
                <FlatButton 
                    label="Change Colors" 
                    onClick={this.showColors}
                    fullWidth={true}
                    backgroundColor="#fff"
                    rippleColor="#54a7d3"
                    hoverColor="#fff"
                />
                <div className="colors not-active" >
                    {this.renderCircles()}
                </div>
                <FlatButton 
                    label="Change Font" 
                    onClick={this.showFonts}
                    fullWidth={true}
                    backgroundColor="#fff"
                    rippleColor="#54a7d3"
                    hoverColor="#fff"
                />
                <div className="fonts not-active" >
                    <p 
                        id="'Lato', sans-serif"
                        onClick={this.changeFont}
                        className='lato font'
                    >
                        Lato
                    </p>
                    <p 
                        id="'Playfair Display', serif"
                        onClick={this.changeFont}
                        className='playfair font'
                    >
                        Playfair Display
                    </p>
                    <p 
                        id="'Abril Fatface', cursive"
                        onClick={this.changeFont}
                        className='abril font'
                    >
                        Abril Fatface
                    </p>
                    <p 
                        id="'Raleway', sans-serif"
                        onClick={this.changeFont}
                        className='raleway font'
                    >
                        Raleway
                    </p>
                    <p 
                        id="'Montserrat', sans-serif"
                        onClick={this.changeFont}
                        className='montserrat font'
                    >
                        Montserrat
                    </p>
                    <p 
                        id="'Exo 2', sans-serif"
                        onClick={this.changeFont}
                        className='exo font'
                    >
                        Exo 2
                    </p>
                    <p 
                        id="'Oswald', sans-serif"
                        onClick={this.changeFont}
                        className='oswald font'
                    >
                        Oswald
                    </p>
                    <p 
                        id="'Chivo', sans-serif"
                        onClick={this.changeFont}
                        className='chivo font'
                    >
                        Chivo
                    </p>
                    <p 
                        id="'Roboto Slab', serif"
                        onClick={this.changeFont}
                        className='roboto font'
                    >
                        Roboto Slab
                    </p>
                </div>
                <FlatButton 
                    label="Print CV" 
                    onClick={this.printPage}
                    fullWidth={true}
                    backgroundColor="#fff"
                    rippleColor="#54a7d3"
                    hoverColor="#fff"
                />
            </div>
        )
    }
}