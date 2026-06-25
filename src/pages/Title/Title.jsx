import { useEffect, useState } from "react"

function Title(){

    const[title, SetTitle] = useState("default");
    const[count, SetCount] = useState(0);

    useEffect (
        () => {
            alert("title changed")
        },
        [title]
    )

    function updateTitle (input){
        document.title = `${title}  ${input}`;
    }
    
    function updateCount () {
        SetCount( count +1);
        updateTitle (`"input"  ${count}`);
    }
    // function updateCount(){

    // }
    return(
        <>
        <h2> 
            title updated = {count}
        </h2>
        <button onClick={() => updateCount()}> check </button>
        </>
    );
}

export default Title