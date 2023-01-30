import React from "react";
import { useRouteError } from "react-router-dom";

const Error=()=>{

    const err=useRouteError();
    const {status,statusText}=err;
    return(
        <>
        <div className="text-center text-3xl p-10">
            <h1>OOps !!</h1>
            <h1>Something went wrong !!</h1>
            <h2>{status + " : " + statusText}</h2>
        </div>
        </>
    )
}
export default Error;