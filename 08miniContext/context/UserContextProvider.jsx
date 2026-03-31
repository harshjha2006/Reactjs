import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [skills,setSkills] = useState(null)
    const [gender,setGender] = useState(null)
    

    return (
        <UserContext.Provider value={{user,setUser,skills,setSkills,gender,setGender}} >
        {children}
        </UserContext.Provider>
    )
}
 export default UserContextProvider