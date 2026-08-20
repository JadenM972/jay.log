import Link from 'next/link'
import { getAllNotes, getNote } from '@/lib/content'

export function generateStaticParams() {
  return getAllNotes().map(({ slug }) => ({ slug }))
}

export default async function NotePage({ params }) {
  const note = await getNote((await params).slug)
  return <main className="shell note-page"><header className="topbar"><Link className="brand" href="/">jaja972<span>@</span>logbook</Link><Link className="back" href="/">← back to index</Link><span className="live"><i /> system online</span></header><article><div className="prompt">~/jaden/technical-logbook/notes/{note.slug} <span>$</span> cat note.md</div><p className="note-type">{note.category} / {note.date}</p><h1>{note.title}</h1><p className="note-description">{note.description}</p><div className="markdown" dangerouslySetInnerHTML={{ __html: note.contentHtml }} /></article></main>
}
