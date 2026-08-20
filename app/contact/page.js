import Link from 'next/link'

const contacts = [
  { label: 'github', value: 'JadenM972', href: 'https://github.com/JadenM972' },
  { label: 'reddit', value: 'u/Jaja972972', href: 'https://www.reddit.com/user/Jaja972972/' },
  { label: 'discord', value: 'yomismo_41633', href: 'https://discord.com/' },
  { label: 'gmail', value: 'jaden972121@gmail.com', href: 'mailto:jaden972121@gmail.com' },
]

export const metadata = {
  title: 'Contact // Jaden',
  description: 'Find Jaden online.',
}

export default function ContactPage() {
  return <main className="shell contact-page">
    <header className="raw-header"><Link className="brand" href="/">jaja972@den:~$</Link><span>./contact.sh</span><span>exit 0</span></header>
    <article className="contact-content">
      <p className="contact-prompt">~/jaden <span>$ ./contact.sh</span></p>
      <h1>find me.</h1>
      <p className="contact-intro">No contact form. No newsletter. Just the places where I actually exist.</p>
      <div className="contact-output">
        <p className="muted">[contact channels]</p>
        {contacts.map((contact) => <div className="contact-line" key={contact.label}><span className="contact-label">{contact.label.padEnd(8, ' ')}</span><span>:</span><a href={contact.href} target={contact.label === 'gmail' ? undefined : '_blank'} rel={contact.label === 'gmail' ? undefined : 'noreferrer'}>{contact.value}</a><span className="contact-arrow">↗</span></div>)}
      </div>
      <pre className="contact-terminal">{`$ ping Jaden

reply from den:~
  status: online-ish
  response: probably learning something
  preferred protocol: plain text

$ _`}</pre>
      <Link className="back-link" href="/">&lt;&lt; cd ..</Link>
    </article>
  </main>
}
