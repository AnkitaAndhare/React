import React from 'react';
import Card from './components/Card'; // Ensure Card.js is in the correct location

function App() {


  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username = "Ankita"  btnText = "Click Me"/>
     <Card  username = "Neha" />  {/*  // default value will take btnText */}
    </>
  );
}

export default App;
