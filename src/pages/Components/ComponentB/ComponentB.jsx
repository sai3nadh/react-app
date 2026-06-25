import { useContext } from "react";
import ComponentC from "../ComponentC/ComponentC";
import { UserContext } from "../ComponentA/ComponentA";


function ComponentB(){

    const user = useContext(UserContext);
    return(
        <div className="box">
            <h2>ComponentB</h2>
            <h3> {user}</h3>
            <ComponentC/>
        </div>
    );

}

export default ComponentB   