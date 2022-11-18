import { SessionProvider } from 'next-auth/react';
import AuthWrapper from '../components/AuthWrapper';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {


  const [homepage1, setHomepage1] = useState('https://i.ibb.co/HzjVr1T/homepage1.jpg')
  const [homepage2, setHomepage2] = useState('https://i.ibb.co/Fhj1wFM/homepage2.jpg')
  const [homepage3, setHomepage3] = useState('https://i.ibb.co/0Z9nhP1/homepage3.jpg')
  const [homepage4, setHomepage4] = useState('https://i.ibb.co/r3r8X9c/homepage4.jpg')
  const [homepage5, setHomepage5] = useState('https://i.ibb.co/7R87dDd/homepage5.jpg')




  return (
    <>
       <Head>
        <title>Hill Valley Production</title>
        <meta property="og:image" content={"/couple3.jpg"} />
        <meta
          property="og:title"
          content="Hill Valley Production" />
        <meta name="description" content="A team of young passionate photographer and cinematographer based in CHT Bangladesh." />
        <link rel="icon" href="/logo.png" />
      </Head>


      <SessionProvider session={pageProps.session} >
        <AuthWrapper>
          <Navbar />
          <Component 
          
          homepage1={homepage1} homepage2={homepage2} homepage3={homepage3} homepage4={homepage4} homepage5={homepage5} 
          setHomepage1={setHomepage1} setHomepage2={setHomepage2} setHomepage3={setHomepage3} setHomepage4={setHomepage4} setHomepage5={setHomepage5} 
          
          
          
          
          
          
          {...pageProps} />
          <ToastContainer />
          <Footer />
        </AuthWrapper>
      </SessionProvider>
    </>)
}

export default MyApp
