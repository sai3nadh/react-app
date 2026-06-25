import React, {useState} from "react";

// React hook Special function that allows functional components
// to use React features without writing class components (React v16.E
//(useState, useEffect, useContext, useReducer, useCallback, and mory


// useState() =  A React hook that allows the creation of a stateful variable AND a setter function to update its value in the Virtual DOM.
//[name, setName]

function Hook(){

    const [name , setName] = useState("Guest");
    const[age, setAge] = useState(0);
    const[input, setInput] = useState("");
    
    const updateAge = () => {
        setAge( age+1);

    }

    const updateName = () => {
        setName( "john");


    }

      const onInput = (event) => {
        setInput( "john"+event.target.value);


    }
    return(
        <div>
            <p>
                Name: {name}
            </p>
            <button onClick={updateName}>
                Set Name
            </button>

              <p>
                Age: {age}
            </p>
             <button onClick={updateAge}>
                Set Age
            </button>

               <p>
                Input: {input}
            </p>
             <input onChange={onInput}/>
               
        </div>
    );

}

export default Hook