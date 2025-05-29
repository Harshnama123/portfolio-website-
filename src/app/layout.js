import './globals.css'
import { Inter } from 'next/font/google'
import ScrollToTop from './components/ScrollToTop'
import CursorTrail from './components/CursorTrail'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Harsh Namdev | Full Stack Developer',
  description: 'Full Stack Developer specializing in modern web technologies. Experienced in React, Next.js, Machine Learning, and Computer Vision.',
  keywords: 'Full Stack Developer, Web Development, React.js, Next.js, Machine Learning, Computer Vision, Portfolio',
  openGraph: {
    title: 'Harsh Namdev | Full Stack Developer',
    description: 'Full Stack Developer specializing in modern web technologies.',
    type: 'website',
    url: 'https://harshnamdev.com',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#333',
              color: '#fff',
              borderRadius: '8px',
            },
          }}
        />
        <CursorTrail />
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
