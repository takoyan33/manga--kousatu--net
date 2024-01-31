import 'styles/globals.css'
import 'tailwindcss/tailwind.css'
import { Header, Footer } from 'layouts/components/ui'
import { AuthProvider } from 'layouts/context/AuthContext'

export default function MyApp({ Component, pageProps }:any) {
  return (
    <AuthProvider>
      <>
        <Header />
        <div className='m-auto mt-10 max-w-7xl'>
          <Component {...pageProps} />
        </div>
        <Footer />
      </>
    </AuthProvider>
  )
}
