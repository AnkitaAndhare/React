import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  return (
    <UserContextProvider>
      <h1>React with Chai</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;


/*

The useContext hook in React is used to access and share data across components without having to pass props down manually at every level. It is particularly useful when you have data or state that needs to be accessed by many components within a component tree.

**********steps*********

Create a Context: First, you create a context using React.createContext(). This creates an object that can be used to share data across components.

Provide Context Value: You use a Provider component to wrap the part of the component tree that needs access to the context. The Provider takes a value prop, which is the data or state that you want to share.

Consume Context Value: Inside any component within the Provider, you can use the useContext hook to access the context value directly.

 */