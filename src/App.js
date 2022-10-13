import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React , {useState} from "react";
import DashBoard from "./components/DashBoard";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllStudents from "./components/AllStudents";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";

function App() {
  let data = {
    earning: "40,000",
    annual: "2,40,000",
    task: 20,
    pending: 26,
  };

  let [students,setStudents] = useState([
    {name : "Prathipan",
     email : "prathipan@gmail.com",
     mobile : "7896541230",
     batch : "b31",
     status : true
    },
    {name : "Praveen",
     email : "praveen@gmail.com",
     mobile : "7896548430",
     batch : "b32",
    }
  ]);
  return (
    <>
      <Router>
        <div style={{ display: "grid", gridTemplateColumns: "15% 85%" }}>
          <div>
            <SideBar />
          </div>
          <div>
            <Routes>
              <Route path="/dashboard" element={<DashBoard data={data} />} />
              <Route path="/all-students" element={<AllStudents data = {{students,setStudents}} />} />
              <Route path="/add-student" element={<AddStudent data = {{students,setStudents}} />} />
              <Route path="/edit-student/:id" element={<EditStudent data = {{students,setStudents}} />} />
              <Route path="*" element={<DashBoard data={data} />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
