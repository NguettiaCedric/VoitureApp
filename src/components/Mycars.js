import React , { Component} from "react";
import Car from './Cars';

class Mycars extends Component {
    render(){
        
        return(

            <div className="">

                <h1>Hello React</h1>

                <Car color="red">Ford</Car>
                <Car color=""></Car>
                <Car color="green">Peugeot</Car>
            </div>  

        )     
    }
}

export default Mycars;