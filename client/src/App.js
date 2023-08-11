import { Route, Routes } from "react-router-dom";
import { Login, Signup } from "./pages";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import DashboardTemplate from "./pages/DashboardTemplate";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard-template" element{<DashboardTemplate />} />
      </Routes>
    </div>
  );
}

export default App;