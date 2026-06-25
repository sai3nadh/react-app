import { useState, createContext } from "react";
import ComponentB from "../ComponentB/ComponentB";
import './ComponentA.css' 

export const UserContext = createContext();

function ComponentA(){

    const[user, setUser] = useState("Hello - react");

    return(
        <div className="box">
            <h2>ComponentA</h2>
            <h3>hello  =====&gt;&gt; `{user}`</h3>
            <UserContext.Provider value={user}>
                <ComponentB/>
            </UserContext.Provider>
        </div> 
    );

}

export default ComponentA   