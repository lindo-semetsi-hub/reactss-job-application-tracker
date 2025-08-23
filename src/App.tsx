import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Home from "./pages/Home.tsx";
import JobDetails from "./pages/JobDetails.tsx";
import NotFound from "./pages/NotFound.tsx";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
          }
          />
          <Route 
            path="/jobs/:id"
            element={
              <PrivateRoute>
                <JobDetails />
              </PrivateRoute>
            }
            />
            <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;