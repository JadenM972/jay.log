import './globals.css'
import TerminalNavigator from '@/app/components/TerminalNavigator'

export const metadata = {
  title: 'Jaden // Technical Logbook',
  description: 'A personal engineering logbook covering C, Python, networking, operating systems, and Rust.',
}

export default function RootLayout({ children }) {
  return <html lang="en"><body><div className="global-terminal"><TerminalNavigator /></div>{children}</body></html>
}
