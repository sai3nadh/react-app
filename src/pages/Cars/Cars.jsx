import { useState } from "react"

function Cars(){

    const[cars, setCars] = useState(["Audi", "BMw"]);

    // setCars = (input) ={
    //     ...Cars, input
    // }
function addCars(){
    // cars = [...Cars, "dummy Car"];
    setCars([...cars, "dummy Car"]);
}
    return(
        <>
         <ol>
            {cars.map((car, index )=> (
                <li key= {index}>{car}</li>))
           
            }
        </ol> 
        <ol>
            {cars.map((car, index) => (
                <li key={index}>{car}</li>
            ))}
</ol>

<button onClick={addCars}>add car</button>
        </>
    );

}

export default Cars