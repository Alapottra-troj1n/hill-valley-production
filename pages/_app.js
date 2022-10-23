

import MessengerCustomerChat from 'react-messenger-customer-chat'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {







  return (
    <>
      <Navbar />
     {
      typeof window !== 'undefined' && (
        <MessengerCustomerChat
        pageId={"100044432706390"}
        appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}        
        xfbml={true}
      />
      )
     }
      <Component {...pageProps} />
      <Footer />
    </>)
}

export default MyApp
