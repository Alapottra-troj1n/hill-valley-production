

import { AnimatePresence } from 'framer-motion';
import { SessionProvider } from 'next-auth/react';
import AuthWrapper from '../components/AuthWrapper';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {







  return (
    <>
      <SessionProvider session={pageProps.session} >
      <AuthWrapper>
      <AnimatePresence>
      <Navbar />
     
      <Component {...pageProps} />
     
      <Footer />
      </AnimatePresence>
      </AuthWrapper>
      </SessionProvider>
    </>)
}

export default MyApp
