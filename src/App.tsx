import React from 'react';
import logo from './logo.svg';
import './App.css';
import usePhoneBookController from './controllers/PhoneBookController';
import PhoneBook from './components/PhoneBook';
import GlobalStyle from './assets/styles/globalStyle';

function App() {
  const phoneBookController = usePhoneBookController();
  return (
    <>
        <GlobalStyle />
   <PhoneBook controller={phoneBookController} />
    </>
  );
}

export default App;
