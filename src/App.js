import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './Practices/Component/Footer';
import Header from "./Practices/Component/Header";


function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}




export default App;
