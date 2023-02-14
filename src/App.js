import { useState } from 'react';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './Practices/Component/Footer';
import Header from "./Practices/Component/Header";
import UseContext from './utils/UseContext';
import store from './utils/store';


function App() {
  const [user,setUser]=useState({
      name:"krishna",
      email:"shyubh@gmail.com"
    
  })
  return (
    <Provider store={store}>
    <UseContext.Provider value={{user:user,setUser:setUser}}>
      <Header />
      <Outlet />
      <Footer />
    </UseContext.Provider>
    </Provider>
  );
}




export default App;
