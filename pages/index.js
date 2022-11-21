import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.css'
import { MdArrowForwardIos } from 'react-icons/md';
import PhotoCard from '../components/PhotoCard';
import connectDb from '../lib/connectDb';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { isMobile } from 'react-device-detect';
import { useEffect, useState } from 'react';
import { animate, motion } from "framer-motion"

export default function Home({ posts }) {


  const [hero, setHero] = useState('');
  const [videoBg, setVideoBg] = useState('');
  const [homepage1, setHomepage1] = useState('https://i.ibb.co/HzjVr1T/homepage1.jpg')
  const [homepage2, setHomepage2] = useState('https://i.ibb.co/Fhj1wFM/homepage2.jpg')
  const [homepage3, setHomepage3] = useState('https://i.ibb.co/0Z9nhP1/homepage3.jpg')
  const [homepage4, setHomepage4] = useState('https://i.ibb.co/r3r8X9c/homepage4.jpg')
  const [homepage5, setHomepage5] = useState('https://i.ibb.co/7R87dDd/homepage5.jpg')


  useEffect(() => {
    if (isMobile) {

      setHero(<div className="relative h-[80vh]" ><Image src={'/hero_mobile.jpg'} objectFit='cover' objectPosition='center' layout='fill' /> </div>);
      setVideoBg(<>
        <div className="relative h-[100vh]" >

          <Image src={'/4bg_mobile.jpg'} objectFit='cover' objectPosition='center' layout="fill" />
          
       
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
       
            <Link href={'/films'} ><button className='bg-transparent px-5 lg:px-7 py-3 rounded-lg font-display lg:text-lg text-sm flex items-center gap-2 border-white border-[2px] bg-white text-black hover:bg-transparent hover:text-white transition-all' >VIEW VIDEOS <MdArrowForwardIos className='text-sm' /> </button>
            </Link>
          </div>
        </div>

      </>)
    } else {
      setHero(<div className={styles.homeBg} >
      </div>)


      setVideoBg(<div  className={styles.secondBg} >

        <div className='flex justify-center flex-col gap-4 items-center h-full' >
          <div className="cursor-pointer text-xl relative lg:w-[290px] lg:h-[104px] w-36 h-16 ">
            <Image alt='logo' src={'/logo_white.png'} layout="fill" objectFit='cover' />
          </div>
          <div className='flex justify-center items-center' >

            <Link href={'/films'} ><button className='bg-transparent px-5 lg:px-7 py-3 rounded-lg  font-display text-white lg:text-lg text-sm flex items-center gap-2 border-white border-[1px] hover:bg-white hover:text-black transition-all' >VIEW VIDEOS <MdArrowForwardIos className='text-sm' /> </button></Link>

          </div>
        </div>

      </div>)
    }

  }, [])



  return (
    <div className="text-slate-600">

      <Head>
        <title>Hill Valley Production</title>
        <meta property="og:image" content={"/couple3.jpg"} />
        <meta
          property="og:title"
          content="Hill Valley Production" />
        <meta name="description" content="A team of young passionate photographer and cinematographer based in CHT Bangladesh." />
        <link rel="icon" href="/favicon.png" />
      </Head>



      {/*******  HERO SECTION *************/}


      {hero}



      {/*******  2ND SECTION *************/}

      <div className='py-20 px-1 lg:px-32 container mx-auto  font-type '>

        <h2 className='font-extra text-center text-3xl lg:text-5xl' >The Art of Making Memories Tangible</h2>
        <div className='border-b-2 mt-7 w-[50%] mx-auto border-main' ></div>
        <p className='mt-11 lg:text-base text-xs px-4 leading-5 lg:px-0' >The photography business isn’t just about picking up a camera and taking stunning photos. It’s hard work that also involves planning strategies that will help you take your business to the next level. Great photography is about depth of feeling, not depth of field.</p>




        <div className='grid grid-cols-1 mt-16 gap-3 lg:gap-5 px-2 lg:px-0' >

          <div className='grid grid-cols-2 gap-3 lg:gap-5'>
            <div className='relative lg:h-[534px] h-[154px] w-full' >
              <Image layout='fill' objectFit='cover' alt='homepagephoto' src={homepage1} />
            </div>
            <div className='relative lg:h-[534px] h-[154px] w-full' >
              <Image layout='fill' objectFit='cover' alt='homepagephoto' src={homepage2} />
            </div>
          </div>

          <div className='relative lg:h-[634px] h-[234px] w-full' >
            <Image layout='fill' objectFit='cover' alt='homepagephoto' objectPosition={'center'} src={homepage3} />
          </div>


          <div className='grid grid-cols-2 gap-3 lg:gap-5'>
            <div className='relative lg:h-[805px] h-[255px] w-full' >
              <Image layout='fill' objectFit='cover' alt='homepagephoto' src={homepage4} />
            </div>
            <div className='relative lg:h-[805px] h-[255px] w-full' >
              <Image layout='fill' objectFit='cover' alt='homepagephoto' src={homepage5} />
            </div>
          </div>

        </div>

      </div>


      {/*******  3RD SECTION *************/}










      {/************* 4TH SECTION *************/}

      <div className='pb-20 bg-white container mx-auto px-4 lg:px-0'>

        <h2 className='text-center pt-20 pb-7 lg:text-4xl text-3xl font-display' >Featured Photoshoots</h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20' >
          {posts.map(post => <PhotoCard key={post._id} data={post} />)}
        </div>




        <Link href={'/photography'} ><div className='flex justify-center mt-10'><button className='bg-transparent lg:px-7 px-5 py-3 rounded-lg  font-display text-sm lg:text-lg flex items-center gap-2  border-[1px] border-gray-400 hover:bg-main hover:border-main  hover:text-white transition-all' >More Photos <MdArrowForwardIos className='text-sm' /></button></div></Link>



      </div>


      {/************* 5TH SECTION *************/}



      <div className=' bg-white' >


        {/* <div className={styles.bgVideo} >
        <video src={"/video.mp4"} autoPlay loop mute   />
        </div> */}

        {videoBg}

      </div>



      {/************* 6TH SECTION *************/}


     <div className='mt-10'>
     <ContactForm />
     </div>


      {/************* 7TH SECTION *************/}


      {/* '100044432706390' */}









    </div>






  )
}



export async function getStaticProps(context) {


  const db = await connectDb();
  const allPosts = await db.collection("posts").find({}).limit(4).toArray();



  return {
    props: { posts: JSON.parse(JSON.stringify(allPosts)) },
    revalidate: 7200,
  }
}