import "./App.css";
import Create from "./components/create/Create";
import Read from "./components/read/Read";
// import {BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="main">
        <h3>CRUD</h3>
        <Create />
        <Read />
      </div>
    </>
  );
}

export default App;
