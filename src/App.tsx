import { BrowseRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import NotFound from "./pages/Notfound";
import PrivateRoute from "./components/PrivateRoute";

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