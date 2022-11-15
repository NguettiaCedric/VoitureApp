import React from "react";



const Car = ({children , color}) => {
    
    const InfoColor = color ? (<p>Couleur: { color }</p>) : (<p>Couleur: Néant</p>);
     // console.log(children);

     if (children) {
        return (

            <div style={{backgroundColor:'pink', width:'400px', padding:'10px', margin:'5px auto'}}>
    
                <p>Marque : { children }</p>
               {/* { color ? <p>Couleur: { color }</p> :  <p>Couleur: Néant </p> } */}
                { InfoColor }
            </div>
        )
     }else{
        return (

            <div style={{backgroundColor:'pink', width:'400px', padding:'10px', margin:'5px auto'}}>
    
                <p>Pas de data !</p>
            </div>
        )
     }

    
}


// function Car({children , color}){
//     const InfoColor = color ? (<p>Couleur: { color }</p>) : (<p>Couleur: Néant</p>);

//     return (

//         <div style={{backgroundColor:'pink', width:'400px', padding:'10px', margin:'5px auto'}}>

//             <p>Marque : { children }</p>
//             { InfoColor }
//         </div>

//     )
// }



export default Car;