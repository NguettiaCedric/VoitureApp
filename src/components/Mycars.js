import React , { Component} from "react";
import Car from './Cars';
import MyHeader from "./MyHeader";
import Wrapper from "./Wrapper";
// import MyHeader from "./MyHeader";


/* const Car = ({children , color}) => {

    const InfoColor = color ? (<p>Couleur: { color }</p>) : (<p>Couleur: Néant</p>);
     let InfoColors = "";

     if(color){

        InfoColors = color;

     }else{

        InfoColors = "Néant";
     }
     return children && (

          <Wrapper>
               <p>Marque : { children }</p>
               <p>Couleur: {InfoColors} </p> 
          </Wrapper>
     )     
} */



export class Mycars extends Component {
    state = {
        cars : ["Ford", "Mercedes", "Peugeot"]
    }

    
    noCopy = () =>{
        alert('Merci de ne pas copier ce texte.')
    }

    addStyle = (e) =>{
        // console.log(e.target.classList.add('styled'));

        if(e.target.classList.contains('styled')){
            
            e.target.classList.remove('styled');

        }else{

            e.target.classList.add('styled');
        }
    }

    render(){

        console.log(this);
        
        const title = this.props.title;
        const color = this.props.color;
        // const { title , color } = this.props;
        // console.log(color);
        return(

            <div className= "">  

                <p onCopy={this.noCopy}>lorem ipsum lorem ipsum lorem ipsum</p>          
                <Wrapper>

                    <MyHeader propsColor={color}>
                        {title} 
                    </MyHeader>

                     {/* <MyHeader myStyle={color}>
                        {title} 
                    </MyHeader> */}


                    {/* <h1 onMouseOver={this.addStyle} style={{ color:color }}>  */}

                    {/* <h1 onMouseOver={this.addStyle}> 
                        {title} 
                    </h1> */}


                </Wrapper>

                <Car color="red">{this.state.cars[0]}</Car>
                <Car color="">{this.state.cars[1]}</Car>
                <Car color="green">{this.state.cars[2]}</Car>

            </div>  

        )     
    }
}

// export default Mycars;