import '@/styles/globals.css'
import localfont from "@next/font/local"

const inter = localfont({ 
  src: '@/fonts/Inter.ttf',
  variable: '--font-inter',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
