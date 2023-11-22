import React from 'react';
import logo from './logo.svg';
import './App.css';
import PhoneBook from './components/PhoneBook';
import GlobalStyle from './assets/styles/globalStyle';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function App() {

  return (
    <>
     <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    <GlobalStyle />
   
   <PhoneBook  />
    </>
  );
}

export default App;
