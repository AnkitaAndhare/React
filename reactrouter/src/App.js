import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
     <h1> Ankita </h1>
     <Header/>
     <Footer/>
     <Home/>
    </>
  );
}

export default App;


/*
npm install react-router-dom 

components
Home 
header
footer 

index.js
RouterProvider router={router}
createrBrouserReact([{path, Element, childern[{} , {}]}])

Layout.js
Outlet   header footer remain same and only outlet content will be changed
<> 
<Header/>
 <Outlet/>
<Footer/>
</Header>
</>



*/ 