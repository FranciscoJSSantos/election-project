import React from 'react';
import './Header.css';

function Header(){
  return( 
    <header>
      <p>Eleições 2020</p> 
      <img className="imagem_simbolo_eleicao" width="50px" height="50px"src="https://cdn-icons-png.flaticon.com/512/1902/1902201.png" alt="" />
    </header>
    
  )
}

export default Header;