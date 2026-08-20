import Link from 'next/link'
import { projects } from '@/lib/projects'

export const metadata = {
  title: 'Projects // Jaden',
  description: 'Experiments, unfinished projects, and things Jaden has made.',
}

export default function ProjectsPage() {
  return <main className="shell projects-page">
    <header className="raw-header"><Link className="brand" href="/">jaja972@den:~$</Link><span>./projects.sh</span><Link href="/interests">./interests.sh</Link><Link href="/contact">./contact.sh</Link><span>exit 0</span></header>
    <article className="projects-content">
      <p className="contact-prompt">~/jaden <span>$ ./projects.sh --all</span></p>
      <h1>things I made.</h1>
      <p className="contact-intro">A project archive with the unfinished parts left visible. Some are tools, some are experiments, and some are proof that I tried something difficult.</p>
      <div className="project-count">[{String(projects.length).padStart(2, '0')} projects found]</div>
      <div className="project-list">{projects.map((project) => <section className="project-entry" key={project.title}><div className="project-heading"><span>{project.number} /</span><h2>{project.title}</h2><b>[{project.status}]</b></div><p className="project-description">{project.description}</p><p className="project-stack"><span>stack:</span> {project.stack}</p><p className="project-note"><span>note:</span> {project.note}</p></section>)}</div>
      <Link className="back-link" href="/">&lt;&lt; cd ..</Link>
    </article>
  </main>
}
