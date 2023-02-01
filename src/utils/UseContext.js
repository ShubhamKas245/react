import { createContext } from "react";

const UseContext=createContext({
 user:{
    name:"dummy",
    email:"dummy@gmail.com",
 }
})

UseContext.displayName="UserContext.Provider";
export default UseContext;