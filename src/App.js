import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './Practices/Component/Footer';
import Header from "./Practices/Component/Header";
import UseContext from './utils/UseContext';


function App() {
  const [user,setUser]=useState({
      name:"shyubh",
      email:"shyubh@gmail.com"
    
  })
  return (
    <>
    <UseContext.Provider value={{user:user,setUser:setUser}}>
      <Header />
      <Outlet />
      <Footer />
    </UseContext.Provider>
    </>
  );
}




export default App;
