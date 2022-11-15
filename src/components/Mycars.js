import React , { Component} from "react";
import Car from './Cars';

class Mycars extends Component {

    render(){

        // console.log(this);
        
        return(

            <div className="">

                <h1>{this.props.title}</h1>

                <Car color="red">Ford</Car>
                <Car color=""></Car>
                <Car color="green">Peugeot</Car>
            </div>  

        )     
    }
}

export default Mycars;