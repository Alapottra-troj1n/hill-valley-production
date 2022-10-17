import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.css'
import { HiOutlineMinus } from 'react-icons/hi';
import { GiCheckMark } from 'react-icons/gi';
import { MdArrowForwardIos } from 'react-icons/md';
import PhotoCard from '../components/PhotoCard';


export default function Home() {






  return (
    <div className="text-slate-600">
      <Head>
        <title>Hill Valley Production</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>


      {/*******  HERO SECTION *************/}


      <div className={styles.homeBg} >

      </div>

      {/*******  2ND SECTION *************/}

      <div className='py-20 px-32 bg-white container mx-auto  font-type '>

        <h2 className='font-extra text-center text-5xl' >The Art of Making Memories Tangible</h2>
        <div className='border-b-2 mt-7 w-[50%] mx-auto border-main' ></div>
        <p className='mt-11 ' >The photography business isn’t just about picking up a camera and taking stunning photos. It’s hard work that also involves planning strategies that will help you take your business to the next level. Great photography is about depth of feeling, not depth of field.</p>




        <div className='grid grid-cols-1 mt-16 gap-5' >

          <div className='grid grid-cols-2 gap-5'>
            <div className='relative h-[534px] w-full' >
              <Image layout='fill' objectFit='cover' src={'/homepage1.png'} />
            </div>
            <div className='relative h-[534px] w-full' >
              <Image layout='fill' objectFit='cover' src={'/homepage2.png'} />
            </div>
          </div>

          <div className='relative h-[634px] w-full' >
            <Image layout='fill' objectFit='cover' objectPosition={'center'} src={'/homepage3.png'} />
          </div>


          <div className='grid grid-cols-2 gap-5'>
            <div className='relative h-[805px] w-full' >
              <Image layout='fill' objectFit='cover' src={'/homepage4.png'} />
            </div>
            <div className='relative h-[805px] w-full' >
              <Image layout='fill' objectFit='cover' src={'/homepage5.png'} />
            </div>
          </div>

        </div>

      </div>


      {/*******  3RD SECTION *************/}



      <div className='py-20 bg-sky-50/50' >
        <div className='container mx-auto ' >
          <h2 className='font-display text-center text-3xl font-semibold' >OUR PACKAGES</h2>


          {/***************** PACKAGES *****************/}

          <div className='grid grid-cols-3 mt-20 gap-36' >

            {/***************** PACKAGE 1 *****************/}

            <div className='flex flex-col bg-white p-12 shadow-sm' >

              <div className='text-center font-display font-semibold' >

                <div className='flex justify-center items-center text-3xl' >
                  <HiOutlineMinus className='text-main' />
                  <h2 className='text-xl mx-4 ' >THE BASIC</h2>
                  <HiOutlineMinus className='text-main' />
                </div>

                <h2 className='text-5xl mt-5' > <span className='text-main' >13,000</span> BDT</h2>


              </div>

              <div className='mt-8 font-type flex flex-col gap-6 text-sm'>

                <div className='flex items-center' >
                  <GiCheckMark className='text-main text-xl' />
                  <h2 className='px-4'>1 Photographer</h2>
                </div>



                <div className='flex items-center' >
                  <GiCheckMark className='text-main text-xl' />
                  <h2 className='px-4'>Duration 1 Day (8.00 am - 10.30 pm)</h2>
                </div>

                <div className='flex items-center' >
                  <GiCheckMark className='text-main text-xl' />
                  <h2 className='px-4'>Print : 50 4r high quality matte print</h2>
                </div>

                <div className='flex items-center' >
                  <GiCheckMark className='text-main text-xl' />
                  <h2 className='px-4'>All photos are edited</h2>
                </div>


                <div className='flex items-center' >
                  <GiCheckMark className=' text-white text-xl' />
                  <h2 className='px-4'>Premium Photo Album with 12L Frame</h2>
                </div>
                <div className='flex items-center' >
                  <GiCheckMark className=' text-white text-xl' />
                  <h2 className='px-4'>2-5 minutes Video trailer</h2>
                </div>
                <div className='flex items-center' >
                  <GiCheckMark className=' text-white text-xl' />
                  <h2 className='px-4'>15-30 minutes full video </h2>
                </div>


              </div>

              <div className='mt-9 text-center font-display text-xl '>

                <button className='px-10 py-3 border-2 border-main rounded-md hover:bg-main hover:text-white transition-all' >Get Started</button>

              </div>




            </div>
            {/***************** PACKAGE 2 *****************/}

            <div className='flex flex-col bg-white p-12 shadow-sm' >

              <div className='text-center font-display font-semibold' >

                <div className='flex justify-center items-center text-3xl' >
                  <HiOutlineMinus className='text-main' />
                  <h2 className='text-xl mx-4 ' >THE BASIC</h2>
                  <HiOutlineMinus className='text-main' />
                </div>

                <h2 className='text-5xl mt-5' > <span className='text-main' >13,000</span> BDT</h2>


              </div>

              <div className='mt-8 font-type flex flex-col gap-6 text-sm'>

                <div className='flex items-center' >
                  <GiCheckMark className='text-main text-xl' />
                  <h2 className='px-4'>1 Photographer</h2>
                </div>



                <div className='flex items-center' >
                  <GiCheckMark className='text-main text-xl' />
                  <h2 className='px-4'>Duration 1 Day (8.00 am - 10.30 pm)</h2>
                </div>

                <div className='flex items-center' >
                  <GiCheckMark className='text-main text-xl' />
                  <h2 className='px-4'>Print : 50 4r high quality matte print</h2>
                </div>

                <div className='flex items-center' >
                  <GiCheckMark className='text-main text-xl' />
                  <h2 className='px-4'>All photos are edited</h2>
                </div>


                <div className='flex items-center' >
                  <GiCheckMark className=' text-white text-xl' />
                  <h2 className='px-4'>Premium Photo Album with 12L Frame</h2>
                </div>
                <div className='flex items-center' >
                  <GiCheckMark className=' text-white text-xl' />
                  <h2 className='px-4'>2-5 minutes Video trailer</h2>
                </div>
                <div className='flex items-center' >
                  <GiCheckMark className=' text-white text-xl' />
                  <h2 className='px-4'>15-30 minutes full video </h2>
                </div>


              </div>

              <div className='mt-9 text-center font-display text-xl '>

                <button className='px-10 py-3 border-2 border-main rounded-md hover:bg-main hover:text-white transition-all' >Get Started</button>

              </div>




            </div>

            {/***************** PACKAGE 3 *****************/}

            <div className='flex flex-col bg-white p-12 shadow-sm' >

              <div className='text-center font-display font-semibold' >

                <div className='flex justify-center items-center text-3xl' >
                  <HiOutlineMinus className='text-main' />
                  <h2 className='text-xl mx-4 ' >THE BASIC</h2>
                  <HiOutlineMinus className='text-main' />
                </div>

                <h2 className='text-5xl mt-5' > <span className='text-main' >13,000</span> BDT</h2>


              </div>

              <div className='mt-8 font-type flex flex-col gap-6 text-sm'>

                <div className='flex items-center' >
                  <GiCheckMark className='text-main text-xl' />
                  <h2 className='px-4'>1 Photographer</h2>
                </div>



                <div className='flex items-center' >
                  <GiCheckMark className='text-main text-xl' />
                  <h2 className='px-4'>Duration 1 Day (8.00 am - 10.30 pm)</h2>
                </div>

                <div className='flex items-center' >
                  <GiCheckMark className='text-main text-xl' />
                  <h2 className='px-4'>Print : 50 4r high quality matte print</h2>
                </div>

                <div className='flex items-center' >
                  <GiCheckMark className='text-main text-xl' />
                  <h2 className='px-4'>All photos are edited</h2>
                </div>


                <div className='flex items-center' >
                  <GiCheckMark className=' text-white text-xl' />
                  <h2 className='px-4'>Premium Photo Album with 12L Frame</h2>
                </div>
                <div className='flex items-center' >
                  <GiCheckMark className=' text-white text-xl' />
                  <h2 className='px-4'>2-5 minutes Video trailer</h2>
                </div>
                <div className='flex items-center' >
                  <GiCheckMark className=' text-white text-xl' />
                  <h2 className='px-4'>15-30 minutes full video </h2>
                </div>


              </div>

              <div className='mt-9 text-center font-display text-xl '>

                <button className='px-10 py-3 border-2 border-main rounded-md hover:bg-main hover:text-white transition-all' >Get Started</button>

              </div>




            </div>





          </div>

          <div className='text-center mt-14'>

            <button className='px-10 py-2 bg-gray-300/75 font-display text-xl rounded-md hover:bg-gray-300 transition-all' >See more</button>

          </div>



        </div>


      </div>






      {/************* 4TH SECTION *************/}

      <div className='py-32 bg-white container mx-auto'>



        <div className='grid grid-cols-2 gap-20' >
          <PhotoCard />
          <PhotoCard />
        </div>
        <div className='text-center py-40' >Flower</div>
        <div className='grid grid-cols-2 gap-20' >
          <PhotoCard />
          <PhotoCard />

        </div>




      </div>


      {/************* 5TH SECTION *************/}



      <div className='py-32 bg-white  '>


        {/* <div className={styles.bgVideo} >
        <video src={"/video.mp4"} autoPlay loop mute   />
        </div> */}

        <div className={styles.secondBg} >

          <div className='flex justify-center items-center h-full' >
            <div className='flex justify-center items-center' >
              <button className='bg-transparent px-7 py-3 rounded-lg  font-display text-white text-lg flex items-center gap-2 border-white border-[1px] hover:bg-white hover:text-black transition-all' >view videos <MdArrowForwardIos className='text-sm' /> </button>  
            </div>
          </div>

        </div>



      </div>









    </div>






  )
}
