import AddProjectForm from './AddProjectForm';
export default async function DashboardPage() {
    const res = await fetch('http://localhost:3000/api/projects', { cache: 'no-store' });
    const projects = await res.json();
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Dashboard</h1>
            <AddProjectForm />
            <ul>
                {projects.map((p: any) => (
                    <li key={p.id}>{p.name}</li>
                ))}
            </ul>
        </div>
    );
}
