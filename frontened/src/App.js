import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './LoginComponent/Login';
import './App.css';
import { Registration } from './RegistrationComponents/Registration';
import { NavbarFront } from './NavbarFront';
function App() {
  return (
    
    <div className="App">
      {/* <header className="App-header">
      <Login/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <h1>Hello Group 2...Welcome</h1>
   
        </a>
      </header> 
      <Registration/>*/}
      <NavbarFront/>
    </div>
  );
}

export default App;
