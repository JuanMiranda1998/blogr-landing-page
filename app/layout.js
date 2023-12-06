import './globals.css'
 
export const metadata = {
  title: 'Blogr Landing Page',
  description: 'Frontend Mentor Challenge',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
