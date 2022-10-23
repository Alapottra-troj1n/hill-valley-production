
import Footer from '../components/Footer';
import Messenger from '../components/Messenger';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {







  return (
    <>
      <Navbar />
      <Messenger/>
      <Component {...pageProps} />
      <Footer />
    </>)
}

export default MyApp
