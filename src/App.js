import "./App.css";
import { Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import Delete from "./components/Delete";

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="Create" element={<Create />} />
        <Route path="Read" exact element={<Read />} />
        <Route path="Update" exact element={<Update />} />
        <Route path="Delete" exact element={<Delete />} />
      </Routes>
    </div>
  );
}

export default App;
