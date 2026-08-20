'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const commands = {
  './interests.sh': '/interests',
  './contact.sh': '/contact',
  './home.sh': '/',
  './learning_path': '/#roadmap',
  './roadmap.sh': '/#roadmap',
  './history.log': '/#history',
  './things_i_made': '/#made',
  './projects.sh': '/projects',
  '..': '/',
}

export default function TerminalNavigator() {
  const router = useRouter()
  const [command, setCommand] = useState('')
  const [message, setMessage] = useState('')

  function runCommand(event) {
    event.preventDefault()
    const value = command.trim()
    const destination = value.startsWith('cd ') ? value.slice(3).trim() : value
    const route = commands[destination]

    if (route) {
      router.push(route)
      return
    }

    if (value === 'sudo rm -rf ') {
      setMessage('nice try.')
    } else if (value === 'help') {
      setMessage('try: cd ./learning_path | cd ./things_i_made | cd ./projects.sh')
    } else if (value) {
      setMessage(`bash: ${value}: command not found`)
    }
    setCommand('')
  }

  return <div className="terminal-nav">
    <form onSubmit={runCommand}>
      <label htmlFor="terminal-command">~/jaden $</label>
      <input id="terminal-command" value={command} onChange={(event) => setCommand(event.target.value)} placeholder="cd ./interests.sh" autoComplete="off" spellCheck="false" aria-label="Terminal navigation command" />
    </form>
    {message && <p className="terminal-response">{message}</p>}
  </div>
}
