import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/Header'
import Beranda from './beranda/Beranda'
import Tentang from './tentang/Tentang'
import Projek from './projek/Projek'
import Kontak from './kontak/Kontak'

function App() {
  return (
    <>
    <Header/>
    <Beranda/>
    <Tentang/>
    <Projek/>
    <Kontak/>
    </>

  );
}
export default App;
