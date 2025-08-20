type Job = {
    id: number;
    company: string;
    role: string;
    status: string;
    date: string;
};

const statusColors: Record<string, string> =  {
    Applied: "yellow",
    Interviewed: "lightgreen",
    Rejected: "lightcoral"
};

function JobCard ({ job }: { job: Job }) {
    return (
        <div
        style={{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px 0",
            backgroundColor: statusColors[job.status] || "lightgray"
        }}
        >
            <h3>{job.company}</h3>
            <p>Role: {job.role}</p>
            <p>Date Applied: {job.date}</p>
        </div>
    );
}
export default JobCard;