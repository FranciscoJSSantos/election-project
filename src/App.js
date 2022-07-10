import React from 'react';
import Header from './header/Header';
import Search from './search/Search';
import Eleitorado from './eleitorado/Eleitorado';
import Footer from './footer/Footer';

function App() {
  return (
    <>
      <Header />  
      <Search />
      <Eleitorado/>
      <Footer/>
    </>
  );
}

export default App;
