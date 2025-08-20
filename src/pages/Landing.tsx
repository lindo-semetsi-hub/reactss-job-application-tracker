import { Link } from  "react-router-dom";

function Landing() {
    return  (
        <div>
            <h1> Welcome to Job Application Tracker</h1>
            <p>Track your job applications easily.</p>
            <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
        </div>
    );
}

export default Landing;