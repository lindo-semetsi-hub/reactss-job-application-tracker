import React from "react";

type Job = {
    id: number;
    company: string;
    role: string;
    status: string;
    date: string;
};

const jobs: Job[] = [
    { id: 1, company: "Google", role: "Frontend Developer", status: "Applied", date: "2025-08-25" },
    { id: 2, company: "BBD", role: "Systems Tester", status: "Interviewed", date: "2025-07-29" },
    { id: 3, company: "Amazon", role: "Researcher", status: "Rejected", date: "2025-08-27" },
];

const statusColors: Record<string, string> = {
    Applied: "orange",
    Interviewed: "green",
    Rejected: "red"
}

const Home: React.FC = () => {
    return (
        <div style={{ padding: "20px" }}>
            <h2>My Job Applictions</h2>
            {jobs.map((job) => (
                <div
                key={job.id}
                style={{
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    padding: "10px",
                    marginBottom: "10px"
                }}
                >
            <h3>{job.company}</h3>
            <p>Role: {job.role}</p>
            <p style={{ color: statusColors[job.status] || "black" }}>
                Status: {job.status}
            </p>
            <p>Date Applied: {job.date}</p>
        </div>
    ))
}
</div>
    );
};

export default Home;
