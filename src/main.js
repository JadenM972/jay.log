import './style.css'

const articles = [
  { category: 'Linux', title: 'The little shell habits that make you much faster', excerpt: 'A field guide to aliases, pipes, history, and the tiny moments of leverage hidden in your terminal.', date: '06 AUG 2026', time: '8 min read' },
  { category: 'Networks', title: 'What actually happens when you type a URL?', excerpt: 'DNS, TCP, TLS, and HTTP explained as one clean journey from keystroke to response.', date: '29 JUL 2026', time: '12 min read' },
  { category: 'Security', title: 'Threat modeling for people who hate threat modeling', excerpt: 'A calm, practical way to find the sharp edges in the systems you build and use.', date: '11 JUL 2026', time: '10 min read' },
]

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="wordmark" href="#top" aria-label="Kernel and Coffee home"><span>k</span>ernel & coffee</a>
    <nav class="main-nav" aria-label="Main navigation">
      <a href="#writing">Writing</a><a href="#about">About</a><a href="#now">Now</a>
    </nav>
    <a class="header-link" href="mailto:hello@kernel.coffee">Get in touch <span aria-hidden="true">↗</span></a>
  </header>

  <main id="top">
    <section class="intro" aria-labelledby="page-title">
      <div class="eyebrow"><span class="status-dot"></span> Independent notes on computers</div>
      <h1 id="page-title">Curious about<br><em>what’s underneath.</em></h1>
      <p class="intro-copy">I’m Alex. I write about Linux, networks, security, and the long, strange journey from source code to running system.</p>
      <div class="intro-meta"><span>Based in the terminal</span><span class="slash">/</span><span>Learning in public since 2021</span></div>
    </section>

    <section class="feature" aria-labelledby="feature-title">
      <div class="feature-image"><img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85" alt="Circuit board close-up" /><span class="image-label">FEATURED / 01</span></div>
      <div class="feature-copy"><p class="section-kicker">Latest deep dive <span>///</span></p><h2 id="feature-title">Building a tiny home lab, and what it taught me about trust</h2><p>My old laptop became a router, a server, and a surprisingly good teacher. Notes on VLANs, containers, and designing for failure before it finds you.</p><a class="read-link" href="#article">Read the article <span aria-hidden="true">→</span></a><div class="article-footer"><span>18 AUG 2026</span><span>14 MIN READ</span></div></div>
    </section>

    <section class="topics" aria-label="Explore topics"><p class="section-kicker">Explore by topic</p><div class="topic-list"><button class="topic active" data-topic="All">All notes <span>24</span></button><button class="topic" data-topic="Linux">Linux <span>09</span></button><button class="topic" data-topic="Networks">Networks <span>07</span></button><button class="topic" data-topic="Security">Security <span>05</span></button><button class="topic" data-topic="Code">Code <span>03</span></button></div></section>

    <section class="writing" id="writing" aria-labelledby="writing-title"><div class="section-heading"><p class="section-kicker">From the notebook</p><h2 id="writing-title">Recent writing</h2><a href="#writing">View all <span aria-hidden="true">↗</span></a></div><div class="article-grid" id="article-grid"></div></section>

    <section class="lower-grid"><div class="about-block" id="about"><p class="section-kicker">A little context</p><h2>Things I’m<br><em>figuring out.</em></h2><p>There’s a particular joy in understanding a system well enough that it stops feeling like magic. This is where I keep the notes from that process: useful, imperfect, and made to be shared.</p><a class="read-link" href="mailto:hello@kernel.coffee">Say hello <span aria-hidden="true">→</span></a></div><aside class="now-block" id="now"><div class="now-title"><span class="status-dot"></span> Currently exploring</div><ul><li><span>01</span> eBPF & observability</li><li><span>02</span> The history of Unix signals</li><li><span>03</span> Better backups, fewer regrets</li></ul><div class="now-date">UPDATED AUGUST 2026</div></aside></section>
  </main>
  <footer><span>© 2026 Kernel & Coffee</span><span>Made with curiosity & caffeine</span><a href="#top">Back to top ↑</a></footer>
`

const grid = document.querySelector('#article-grid')
const renderArticles = (topic = 'All') => {
  grid.innerHTML = articles.filter((article) => topic === 'All' || article.category === topic).map((article) => `
    <article class="article-card"><div class="card-top"><span class="category">${article.category}</span><span>${article.date}</span></div><h3>${article.title}</h3><p>${article.excerpt}</p><div class="card-bottom"><span>${article.time}</span><a href="#article" aria-label="Read ${article.title}">↗</a></div></article>`).join('')
}
renderArticles()
document.querySelectorAll('.topic').forEach((button) => button.addEventListener('click', () => {
  document.querySelector('.topic.active').classList.remove('active')
  button.classList.add('active')
  renderArticles(button.dataset.topic)
}))
