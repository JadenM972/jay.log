import Link from 'next/link'
import { getAllNotes } from '@/lib/content'
import { projects } from '@/lib/projects'

const roadmap = [
  ['01', 'Python', 'the tool I reach for first'],
  ['02', 'C', 'where the machine stops hiding'],
  ['03', 'Networking', 'the detour I actually needed'],
  ['04', 'Rust', 'somewhere up ahead'],
]

const timeline = [
  ['2017', 'Scratch + simple algorithms', 'Started making little things move and discovering that instructions can become games.'],
  ['2020', 'Python course', 'First serious contact with programming. Small scripts, loops, and a lot of errors.'],
  ['2022-2023', 'Unity / C#', 'Tried to build games. Failed a lot. Still learned how projects get too big.'],
  ['2023', 'Videogame channel', 'Got to 300 subscribers, then let it down. It was fun while it lasted.'],
  ['Sep 2024 - Feb 2026', 'Stuck by choice', 'I did not feel like doing anything. No dramatic lesson. Just a long pause.'],
  ['Mar 2026 - now', 'Back at it', 'Cybersecurity, networking, small projects, C, and finally paying attention to foundations.'],
]

export default function Home() {
  const notes = getAllNotes()
  return <main className="shell">
    <header className="raw-header"><Link className="brand" href="/">jaja972@den:~$</Link><Link href="#roadmap">./learning_path</Link><Link href="#history">./history.log</Link><Link href="#made">./things_i_made</Link><Link href="/interests">./interests.sh</Link><Link href="/contact">./contact.sh</Link><span>cat log.txt</span><span>2026-08-20</span></header>
    <section className="raw-intro" id="about"><p>~/jaden <span>$ whoami</span></p><h1>Jaden</h1><div className="whoami-block"><p>handles: <strong>jaja972</strong> / <strong>Phantom_Burner</strong></p><p>age: <strong>15</strong></p><p>location: NULL</p><p>status: <strong>Prolly coding</strong></p></div><div className="command-output"><p className="shell-command">$ cat about.txt</p><p className="raw-copy">I am trying to understand how <strong>machines</strong> work instead of just using them.</p><p className="shell-command">$ cat philosophy.txt</p><p className="raw-copy">I like the moment when something stops being <em>magic</em>. A <strong>packet</strong>, a <strong>pointer</strong>, a process, a <strong>crash</strong>. If I can break it and understand why, that counts as progress.</p><p className="shell-command">$ cat current_focus.txt</p><p className="raw-copy">Right now: <strong>Python</strong> and <strong>C</strong>. C is the bridge to <strong>Rust</strong>. Cybersecurity is paused while I build the networking and operating systems foundations I kept skipping.</p></div></section>
    <section className="raw-section" id="session"><h2>current_session</h2><pre>{`$ cat what_i_am_breaking.txt

- pointer arithmetic

$ cat what_i_am_reading.txt

La cryptologie au cœur du numérique

$ cat last_small_win.txt

understand malloc and free

$ _`}</pre></section>
    <section className="raw-section" id="roadmap"><h2>learning_path // not a roadmap</h2><p>Not a career plan. Just the order that makes sense today.</p><ul>{roadmap.map(([number, title, detail]) => <li key={title}><span>{number}.</span> <strong>{title}</strong> - {detail}</li>)}</ul></section>
    <section className="raw-section timeline-section" id="history"><h2>history.log // how I got here</h2><div className="timeline">{timeline.map(([date, title, detail]) => <div className="timeline-row" key={date}><time>{date}</time><div><strong>{title}</strong><p>{detail}</p></div></div>)}</div></section>
    <section className="raw-section made-section" id="made"><h2>things_i_made // actual experiments</h2><p>Not everything became a finished project. It still counts. <Link className="inline-command" href="/projects">open full project archive &gt;&gt;</Link></p><ul>{projects.map(({ number, title, description }) => <li key={title}><span>{number}.</span> <strong>{title}</strong> - {description}</li>)}</ul></section>
    <section className="raw-section" id="archive"><h2>archive // things I am poking at</h2><p>{String(notes.length).padStart(2, '0')} scraps, mostly unfinished.</p><div className="raw-notes">{notes.map((note) => <Link className="raw-note" href={`/notes/${note.slug}`} key={note.slug}><span>[{note.category}]</span> {note.title} <small>({note.date})</small></Link>)}</div></section>
    <footer className="raw-footer"><span>-- end of file --</span><Link href="/contact">./contact.sh &gt;&gt;</Link></footer>
  </main>
}
