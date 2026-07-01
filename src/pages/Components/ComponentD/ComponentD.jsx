import { useContext } from "react";
import { UserContext } from "../ComponentA/ComponentA";

function ComponentD(){
    const user = useContext(UserContext);

    return(
        <div  className="box">
            <h2>ComponentC</h2>
            <h3>hello -- data from A -- {user}</h3>
        </div>
    );

}

export default ComponentD  