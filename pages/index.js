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
import { FaCamera } from 'react-icons/fa';

export default function Home({ posts, section2 }) {


  const [hero, setHero] = useState('');
  const [videoBg, setVideoBg] = useState('');
  const [homepage1, setHomepage1] = useState(section2.image1)
  const [homepage2, setHomepage2] = useState(section2.image2)
  const [homepage3, setHomepage3] = useState(section2.image3)
  const [homepage4, setHomepage4] = useState(section2.image4)
  const [homepage5, setHomepage5] = useState(section2.image5)



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


      setVideoBg(<div className={styles.secondBg} >

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

        <h2 className='font-display text-center text-3xl lg:text-5xl' >About Us</h2>
        <div className='border-b-2 mt-7 w-[20%] mx-auto border-main' ></div>
        <p className='mt-11 text-xs lg:text-lg px-4 lg:px-0 leading-6 lg:leading-10' >We are a team of young and passionate people determined to capture the essence of life through our lenses. Since 2016 we have been perfecting our photography and cinematography. The art of photography is not just about picking up a camera and taking photos. It's about bringing life to the pictures, it's about capturing the beauty of life.</p>






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



      <div className='mt-20 mb-40 container mx-auto'>

        <h2 className='font-display text-center text-2xl lg:text-5xl mt-10' >Services We Offer</h2>
        <div className='border-b-2 mt-7 w-[5%] mx-auto border-main' ></div>
        <div className='grid grid-cols-1 lg:grid-cols-2' >
          <div className='flex  flex-col items-center gap-10 mt-20' >
            <div className='relative w-[350px] h-[350px]'>
            <Image layout='fill' objectFit='cover' alt='photography' src={'/services/photography.svg'}/>
            </div>
            <div>
              <h2 className='lg:text-3xl text-xl text-center font-display font-semibold ' >PHOTOGRAPHY</h2>

              <p className='font-type text-xs lg:text-md font-medium text-gray-400 mt-5 px-20 leading-8'>We provide the most premium and fully customizable Photography services. Our photography services include <span className='text-main'>Wedding</span>, <span className='text-main'>Fashion</span>, <span className='text-main'>Product</span>, <span className='text-main'>Birthday</span>, <span className='text-main'>Corporate Events</span>, <span className='text-main'>Headshots</span> etc. 
              
              </p>

            </div>
          </div>

          <div className='flex flex-col items-center gap-10 mt-20' >
            <div className='relative w-[350px] h-[350px]'>
            <Image layout='fill' objectFit='cover' alt='photography' src={'/services/cinematography.svg'}/>
           
            </div>
            <div>
              <h2 className='lg:text-3xl text-xl font-display font-semibold text-center' >CINEMATOGRAPHY</h2>
              <p className='font-type text-xs font-medium lg:text-md text-gray-400 mt-5 px-20 leading-8'>Our expert team of Cinematographers and Film-Makers will provide the most premium Cinematography services at a budget-friendly pricing. Cinematography services include <span className='text-main'>Wedding</span>, <span className='text-main'>Fashion</span>, <span className='text-main'>Commercial</span>, <span className='text-main'>Documentary</span>, <span className='text-main'>Music Videos</span> etc. 
              
              </p>
            </div>
          </div>


        </div>

      </div>






      {/************* 4TH SECTION *************/}

      <div className='pb-20  container mx-auto px-4 lg:px-0'>

        <h2 className='text-center pt-20  lg:text-5xl text-3xl font-display' >Featured Photoshoots</h2>
        <div className='border-b-2 mt-7 mb-20 w-[5%] mx-auto border-main' ></div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20' >
          {posts.map(post => <PhotoCard key={post._id} data={post} />)}
        </div>




        <Link href={'/photography'} ><div className='flex justify-center mt-10'><button className='bg-transparent lg:px-7 px-5 py-3 rounded-lg  font-display text-sm lg:text-lg flex items-center gap-2  border-[1px] border-gray-400 hover:bg-main hover:border-main  hover:text-white transition-all' >More Photos <MdArrowForwardIos className='text-sm' /></button></div></Link>



      </div>


      {/************* 5TH SECTION *************/}



      <div className=' bg-white' >

        {videoBg}

      </div>



      {/************* 6TH SECTION *************/}


      <div className='mt-10'>

        <ContactForm />
      </div>


      {/************* 7TH SECTION *************/}


    </div>


  )
}



export async function getServerSideProps(context) {


  const db = await connectDb();
  const allPosts = await db.collection("posts").find({}).limit(4).toArray();
  const section2 = await db.collection("homepageLinks").find({ name: "section2" }).toArray();




  return {
    props: { posts: JSON.parse(JSON.stringify(allPosts)), section2: JSON.parse(JSON.stringify(section2[0])) },
  }
}