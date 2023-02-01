import React, { useContext } from "react";
import UseContext from "../../utils/UseContext";

const Footer = () => {
  const {user}=useContext(UseContext);
    return (
      <>
        <div>
          <h1>This site is developed by : {user.name}</h1>
        <h4>Footer</h4>
        </div>
      </>
    );
  };
export default Footer;