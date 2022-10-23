import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {







  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <MessengerChat
      language='en_US'
      pageId='100044432706390'
      
      />
      <Footer/>
    </>)
}

export default MyApp
