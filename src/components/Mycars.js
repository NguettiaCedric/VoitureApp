import React , { Component} from "react";
import Car from './Cars';
import MyHeader from "./MyHeader";
import Wrapper from "./Wrapper";
// import MyHeader from "./MyHeader";
export class Mycars extends Component {

    state = {
        cars : ["Ford", "Mercedes", "Peugeot"]
    }
    render(){

        // console.log(this);
        // const title = this.props.title;
        const { title , color } = this.props;
        // const {color} = this.props;
        // console.log(color);
        return(

            <div className= "">            
                <Wrapper>
                    <MyHeader myStyle={color}>
                        {title} 
                    </MyHeader>

                    {/* <h1 style={{ color:color }}> 
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