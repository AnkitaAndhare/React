import './App.css';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js';
 
function App() {
  return (
    <>
    { /*<Navbar title='TextUtils' aboutText='About YTextUtils'/> */ }
    {/* <Navbar/> */}
   <Navbar title = "TextUtil"/>
   <div className="container my-3">
   <TextForm heading = "Enter the text to analyze "/>

   </div>
    </> 
  );
}

export default App;

/*
single page website 

function based component 
classname based 

jsx = html with below changes 
classname=  classname
for = htmlFor
<>  </> return only one element


props = properties 

*/
