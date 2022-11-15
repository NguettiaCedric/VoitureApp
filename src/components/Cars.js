import React from "react";
import Wrapper from "./Wrapper";



const Car = ({children , color}) => {

    const InfoColor = color ? (<p>Couleur: { color }</p>) : (<p>Couleur: Néant</p>);
     // console.log(color);


     /* ------------------------------------------------------------------------------------------- */
    //  if (children) {
    //     return (

    //         <div style={{backgroundColor:'pink', width:'400px', padding:'10px', margin:'5px auto'}}>
    
    //             <p>Marque : { children }</p>
    //            {/* { color ? <p>Couleur: { color }</p> :  <p>Couleur: Néant </p> } */}
    //             { InfoColor }
    //         </div>
    //     )
    //  }else{
    //     return (

    //         <div style={{backgroundColor:'pink', width:'400px', padding:'10px', margin:'5px auto'}}>
    
    //             <p>Pas de data !</p>
    //         </div>
    //     )
    //  }

     /* ------------------------------------------------------------------------------------------- */

     let InfoColors = "";

     if(color){

        InfoColors = color;

     }else{

        InfoColors = "Néant";
     }

     /* ------------------------------------------------------------------------------------------- */
     return children && (

          <Wrapper>
               <p>Marque : { children }</p>
               <p>Couleur: {InfoColors} </p> 
          </Wrapper>

          // <div style={{backgroundColor:'pink', width:'400px', padding:'10px', margin:'5px auto'}}>
          //      <p>Marque : { children }</p>
          //      <p>Couleur: {InfoColors} </p> 
          // </div>
     ) 
     /* ------------------------------------------------------------------------------------------- */
     // return children ? (

     //       <div style={{backgroundColor:'pink', width:'400px', padding:'10px', margin:'5px auto'}}>
   
     //           <p>Marque : { children }</p>
     //            <p>Couleur: {InfoColors} </p> 
   
     //       </div>
     //   ) : <p style={{backgroundColor:'pink', width:'400px', padding:'10px', margin:'5px auto'}}>Pas de data !</p>

     /* ------------------------------------------------------------------------------------------- */

   //   return children ? (

   //      <div style={{backgroundColor:'pink', width:'400px', padding:'10px', margin:'5px auto'}}>

   //          <p>Marque : { children }</p>
   //           <p>Couleur: {InfoColors} </p> 

   //      </div>
   //  ) : <p style={{backgroundColor:'pink', width:'400px', padding:'10px', margin:'5px auto'}}>Pas de data !</p>

     /* ------------------------------------------------------------------------------------------- */
    
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