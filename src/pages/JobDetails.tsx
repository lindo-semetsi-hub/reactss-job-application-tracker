import { useParams } from "react-router-dom"

function JobDetails() {
    const { id } = useParams();

    return (
        <div>
            <h2>Job Details (ID: {id})</h2>
            <p>Here you can dispaly more details about the job and company.</p>
        </div>
    );
}

export default JobDetails;