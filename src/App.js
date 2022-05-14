import "./App.css";
import { Route, Routes } from "react-router-dom";
import Create from "./components/create/Create";
import Read from "./components/read/Read";
import Update from "./components/update/Update";

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="read" exact element={<Read />} />
        <Route path="update" exact element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
