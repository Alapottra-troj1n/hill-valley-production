import { SessionProvider } from "next-auth/react";
import AuthWrapper from "../components/AuthWrapper";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Head from "next/head";
import Facebook from "../components/Facebook";
import Script from "next/script";
import { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(()=>{
    router.events.on('routeChangeComplete',()=> {
      setProgress(100);
    })
  },[])
  return (
    <>
      <>
        <Head>
          <title>Hill Valley Production</title>
          <meta property="og:image" content={"/couple3.jpg"} />
          <meta property="og:title" content="Hill Valley Production" />
          <meta
            name="description"
            content="A team of young passionate photographer and cinematographer based in CHT Bangladesh."
          />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Script
          id="Adsense-id"
          data-ad-client="ca-pub-1915872321700904"
          async="true"
          strategy="beforeInteractive"
          crossorigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
      </>

      <SessionProvider session={pageProps.session}>
        <AuthWrapper>
          <LoadingBar
            color="#FFA41F"
            progress={progress}
            waitingTime={500}
            onLoaderFinished={() => setProgress(0)}
          />
          <Navbar />
          <Component {...pageProps} />
          <ToastContainer />
          <Footer />
          <Facebook />
        </AuthWrapper>
      </SessionProvider>
    </>
  );
}

export default MyApp;
