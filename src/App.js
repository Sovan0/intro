// import './App.css';
import Intro from './components/intro/Intro'
import Header from './components/header/Header';
import Page from './components/page/Page';
import React, { useState, useEffect } from 'react'

function App() {
  const[loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
    setLoading(false);
  }, 7400);
  }, []);


  return (
    <div>
      { loading ? <Intro/> :
      <div className="app">
         <Header/>
         <Page/>
         </div>
       }
       
    </div>
  )
  // return ( 
  // <>
  //     { loading ? (
  //       <div className="intro">
  //         <Intro/>
  //       </div>
  //     ) : (
  //       <div className="app">
  //         <Header/>
  //         <Page/>
  //       </div>
  //     )}
  //   </>
  // )
}


export default App;
