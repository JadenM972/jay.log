import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const contentDirectory = path.join(process.cwd(), 'content')

export function getAllNotes() {
  return fs.readdirSync(contentDirectory).filter((file) => file.endsWith('.md')).map((file) => {
    const slug = file.replace(/\.md$/, '')
    const source = fs.readFileSync(path.join(contentDirectory, file), 'utf8')
    const { data } = matter(source)
    return { slug, ...data }
  }).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export async function getNote(slug) {
  const source = fs.readFileSync(path.join(contentDirectory, `${slug}.md`), 'utf8')
  const { data, content } = matter(source)
  const processed = await remark().use(html).process(content)
  return { slug, ...data, contentHtml: processed.toString() }
}
