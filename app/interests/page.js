import Link from 'next/link'

export const metadata = {
  title: 'Interests // Jaden',
  description: 'The things Jaden keeps coming back to.',
}

export default function InterestsPage() {
  return <main className="shell interests-page">
    <header className="raw-header"><Link className="brand" href="/">jaja972@den:~$</Link><span>./interests.sh</span><Link href="/contact">./contact.sh</Link><span>exit 0</span></header>
    <article className="interests-content">
      <p className="contact-prompt">~/jaden <span>$ ./interests.sh</span></p>
      <h1>things I keep<br />coming back to.</h1>
      <p className="contact-intro">Not a definitive list. Just the subjects that pull me back in when I am supposed to be doing something else.</p>
      <section className="interest-block"><h2>01 / reptiles</h2><p>Reptiles in general, but mostly lizards. The shapes, behavior, habitats, and ridiculous variety of them are hard to stop reading about.</p><ul><li>lizard behavior and adaptation</li><li>endemic species and local biodiversity</li><li>field observations, photos, and data</li></ul></section>
      <section className="interest-block"><h2>02 / machines</h2><p>Operating systems, networking, C, Python, security, and the parts of a computer that usually stay hidden behind a friendly interface.</p><ul><li>memory, pointers, malloc and free</li><li>sockets, packets, and protocols</li><li>local models and weird little automations</li></ul></section>
      <section className="interest-block"><h2>03 / the overlap</h2><p>I like turning curiosity into small projects: collect some data, write a script, make a graph, break the script, understand the breakage.</p></section>
      <section className="interest-block currently-playing"><h2>04 / currently playing</h2><p>When I am not in a terminal, I am probably somewhere in one of these:</p><ul><li><strong>Warframe</strong> - builds, missions, and trying to understand what is happening on screen</li><li><strong>ARK: Survival Evolved</strong> - dinosaurs, bases, and questionable survival decisions</li></ul></section>
      <pre className="contact-terminal">{`$ printf "current obsession"

reptiles + data + machines

$ _`}</pre>
      <Link className="back-link" href="/">&lt;&lt; cd ..</Link>
    </article>
  </main>
}
