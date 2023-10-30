import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WallisEmporium',
  description: 'we are here to change your world! ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      <main className='p-4 max-w-7xl m-auto min-w-[300px]'>
      {children}
      </main>  
      </body>
    </html>
  )
}
