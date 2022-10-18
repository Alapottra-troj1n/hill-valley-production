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

      <div className='py-20 px-1 lg:px-32 bg-white container mx-auto  font-type '>

        <h2 className='font-extra text-center text-3xl lg:text-5xl' >The Art of Making Memories Tangible</h2>
        <div className='border-b-2 mt-7 w-[50%] mx-auto border-main' ></div>
        <p className='mt-11 lg:text-md text-xs px-2 lg:px-0' >The photography business isn’t just about picking up a camera and taking stunning photos. It’s hard work that also involves planning strategies that will help you take your business to the next level. Great photography is about depth of feeling, not depth of field.</p>




        <div className='grid grid-cols-1 mt-16 gap-5 px-2 lg:px-0' >

          <div className='grid grid-cols-2 gap-5'>
            <div className='relative lg:h-[534px] h-[334px] w-full' >
              <Image layout='fill' objectFit='cover' src={'/homepage1.jpg'} />
            </div>
            <div className='relative lg:h-[534px] h-[334px] w-full' >
              <Image layout='fill' objectFit='cover' src={'/homepage2.jpg'} />
            </div>
          </div>

          <div className='relative lg:h-[634px] h-[434px] w-full' >
            <Image layout='fill' objectFit='cover' objectPosition={'center'} src={'/homepage3.png'} />
          </div>


          <div className='grid grid-cols-2 gap-5'>
            <div className='relative lg:h-[805px] h-[505px] w-full' >
              <Image layout='fill' objectFit='cover' src={'/homepage4.jpg'} />
            </div>
            <div className='relative lg:h-[805px] h-[505px] w-full' >
              <Image layout='fill' objectFit='cover' src={'/homepage5.jpg'} />
            </div>
          </div>

        </div>

      </div>


      {/*******  3RD SECTION *************/}



      <div className='py-20 bg-sky-50/50' >
        <div className='container mx-auto ' >
          <h2 className='font-display text-center lg:text-3xl text-2xl  font-semibold' >OUR PACKAGES</h2>


          {/***************** PACKAGES *****************/}

          <div className='grid grid-cols-1 lg:grid-cols-3 mt-20 gap-36 px-10 lg:px-0' >

            {/***************** PACKAGE 1 *****************/}

            <div className='flex flex-col bg-white p-12 shadow-sm' >

              <div className='text-center font-display font-semibold' >

                <div className='flex justify-center items-center text-3xl' >
                  <HiOutlineMinus className='text-main' />
                  <h2 className='lg:text-xl text-base mx-4 ' >THE BASIC</h2>
                  <HiOutlineMinus className='text-main' />
                </div>

                <h2 className='lg:text-5xl text-4xl mt-5' > <span className='text-main' >13,000</span> BDT</h2>


              </div>

              <div className='mt-8 font-type flex flex-col gap-6 text-xs lg:text-sm'>

                <div className='flex items-center' >
                  <GiCheckMark className='text-main text-xl' />
                  <h2 className='px-4'>1 Photographer</h2>
                </div>



                <div className='flex items-center' >
                  <GiCheckMark className='text-white text-xl' />
                  <h2 className='px-4'>1 Cinematographer</h2>
                </div>

                <div className='flex items-center' >
                  <GiCheckMark className='text-main text-xl' />
                  <h2 className='px-4'>Duration 1 Day (8am - 10:30pm)</h2>
                </div>

                <div className='flex items-center' >
                  <GiCheckMark className='text-main text-xl' />
                  <h2 className='px-4'>Print : 50 4r High Quality Matte</h2>
                </div>


                <div className='flex items-center' >
                  <GiCheckMark className=' text-main text-xl' />
                  <h2 className='px-4'>All Photos are Edited</h2>
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

              <div className='mt-9 text-center font-display '>

                <button className='lg:px-10 px-5 lg:py-3 py-2 text-sm lg:text-xl  border-2 border-main rounded-md hover:bg-main hover:text-white transition-all' >Get Started</button>

              </div>




            </div>
            {/***************** PACKAGE 2 *****************/}

            <div className='flex flex-col bg-white p-12 shadow-sm' >

              <div className='text-center font-display font-semibold' >

                <div className='flex justify-center items-center text-3xl' >
                  <HiOutlineMinus className='text-main' />
                  <h2 className='lg:text-xl text-base mx-4 ' >THE MOMENTO</h2>
                  <HiOutlineMinus className='text-main' />
                </div>

                <h2 className='lg:text-5xl text-4xl mt-5' > <span className='text-main' >36,500</span> BDT</h2>


              </div>

              <div className='mt-8 font-type flex flex-col gap-6 lg:text-sm text-xs'>

                <div className='flex items-center' >
                  <GiCheckMark className='text-main text-xl' />
                  <h2 className='px-4'>Anik & 1 Photographer</h2>
                </div>



                <div className='flex items-center' >
                  <GiCheckMark className='text-main text-xl' />
                  <h2 className='px-4'>1 Cinematographer</h2>
                </div>

                <div className='flex items-center' >
                  <GiCheckMark className='text-main text-xl' />
                  <h2 className='px-4'>Duration 1 Day (8am - 10:30pm)</h2>
                </div>

                <div className='flex items-center' >
                  <GiCheckMark className='text-main text-xl' />
                  <h2 className='px-4'>Print : 50 4r High Quality Matte</h2>
                </div>


                <div className='flex items-center' >
                  <GiCheckMark className=' text-main text-xl' />
                  <h2 className='px-4'>All Photos are Edited</h2>
                </div>
                <div className='flex items-center' >
                  <GiCheckMark className=' text-white text-xl' />
                  <h2 className='px-4'>Premium Photo Album with 12L Frame</h2>
                </div>
                <div className='flex items-center' >
                  <GiCheckMark className=' text-main text-xl' />
                  <h2 className='px-4'>2-5 minutes Video trailer</h2>
                </div>
                <div className='flex items-center' >
                  <GiCheckMark className=' text-main text-xl' />
                  <h2 className='px-4'>15-30 minutes full video </h2>
                </div>


              </div>

              <div className='mt-9 text-center font-display '>

                <button className='lg:px-10 px-5 lg:py-3 py-2 text-sm lg:text-xl  border-2 border-main rounded-md hover:bg-main hover:text-white transition-all' >Get Started</button>

              </div>




            </div>

            {/***************** PACKAGE 3 *****************/}


            <div className='flex flex-col bg-white p-12 shadow-sm' >

              <div className='text-center font-display font-semibold' >

                <div className='flex justify-center items-center text-3xl' >
                  <HiOutlineMinus className='text-main' />
                  <h2 className='lg:text-xl text-base mx-4 ' >THE SIGNATURE</h2>
                  <HiOutlineMinus className='text-main' />
                </div>

                <h2 className='lg:text-5xl text-4xl mt-5' > <span className='text-main' >60,000</span> BDT</h2>


              </div>

              <div className='mt-8 font-type flex flex-col gap-6 lg:text-sm text-xs'>

                <div className='flex items-center' >
                  <GiCheckMark className='text-main text-xl' />
                  <h2 className='px-4'>Antar, Anik & 1 Photographer</h2>
                </div>



                <div className='flex items-center' >
                  <GiCheckMark className='text-main text-xl' />
                  <h2 className='px-4'>2 Cinematographer</h2>
                </div>

                <div className='flex items-center' >
                  <GiCheckMark className='text-main text-xl' />
                  <h2 className='px-4'>Duration 1 Day (8am - 10:30pm)</h2>
                </div>

                <div className='flex items-center' >
                  <GiCheckMark className='text-main text-xl' />
                  <h2 className='px-4'>Print : 50 4r High Quality Matte</h2>
                </div>


                <div className='flex items-center' >
                  <GiCheckMark className=' text-main text-xl' />
                  <h2 className='px-4'>All Photos are Edited</h2>
                </div>
                <div className='flex items-center' >
                  <GiCheckMark className=' text-main text-xl' />
                  <h2 className='px-4'>Premium Photo Album with 12L Frame</h2>
                </div>
                <div className='flex items-center' >
                  <GiCheckMark className=' text-main text-xl' />
                  <h2 className='px-4'>2-5 minutes Video trailer</h2>
                </div>
                <div className='flex items-center' >
                  <GiCheckMark className=' text-main text-xl' />
                  <h2 className='px-4'>15-30 minutes full video </h2>
                </div>


              </div>

              <div className='mt-9 text-center font-display '>

                <button className='lg:px-10 px-5 lg:py-3 py-2 text-sm lg:text-xl  border-2 border-main rounded-md hover:bg-main hover:text-white transition-all' >Get Started</button>

              </div>




            </div>




          </div>

          <div className='flex justify-center mt-10'><button className='bg-transparent lg:px-7 px-5 py-3 rounded-lg  font-display text-sm lg:text-lg flex items-center gap-2  border-[1px] border-gray-400 hover:bg-main hover:border-main  hover:text-white transition-all' >See All Packages <MdArrowForwardIos className='text-sm' /> </button></div>



        </div>


      </div>






      {/************* 4TH SECTION *************/}

      <div className='py-20 bg-white container mx-auto px-4 lg:px-0'>



        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20' >
          <PhotoCard img={'/couple1.jpg'} name={'PRITIKA & SUBHRAM'} />
          <PhotoCard img={'/couple2.jpg'} name={'ALEX & ALISHA'} />
        </div>
        <div className='text-center py-20' ></div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20' >
          <PhotoCard img={'/couple3.jpg'} name={'JIMI & DRISTI'} />
          <PhotoCard img={'/couple4.jpg'} name={'DEEDHITI & AVI'} />

        </div>

        
        <div className='flex justify-center mt-10'><button className='bg-transparent lg:px-7 px-5 py-3 rounded-lg  font-display text-sm lg:text-lg flex items-center gap-2  border-[1px] border-gray-400 hover:bg-main hover:border-main  hover:text-white transition-all' >More Photos <MdArrowForwardIos className='text-sm' /></button></div>



      </div>


      {/************* 5TH SECTION *************/}



      <div className='py-20 bg-white' >


        {/* <div className={styles.bgVideo} >
        <video src={"/video.mp4"} autoPlay loop mute   />
        </div> */}

        <div className={styles.secondBg} >

          <div className='flex justify-center flex-col gap-4 items-center h-full' >
            <Image src={'/Logo.png'} height={104} width={221} />
            <div className='flex justify-center items-center' >

              <button className='bg-transparent px-5 lg:px-7 py-3 rounded-lg  font-display text-white lg:text-lg text-sm flex items-center gap-2 border-white border-[1px] hover:bg-white hover:text-black transition-all' >VIEW VIDEOS <MdArrowForwardIos className='text-sm' /> </button>
            </div>
          </div>

        </div>

      </div>



      {/************* 6TH SECTION *************/}

      <div className='pb-20 bg-white ' >
        <h2 className='font-display text-2xl text-center' >Contact us</h2>

        <div className='flex justify-center mt-20 w-full' >
          <form className='font-type mt-2 flex flex-col gap-7 text-sm' >

          <div className='flex flex-col xl:flex-row xl:items-center items-start xl:justify-between' >
              <label htmlFor='clientName' >Name :</label>
              <input type="text" name="clientName" id="clientName" className="border-b border-slate-700 xl:w-96 py-1 px-2 w-[80%]" />
            </div>

            <div className='flex flex-col xl:flex-row xl:items-center items-start xl:justify-between' >
              <label htmlFor='clientEmail' >Email :</label>
              <input type="text" name="clientEmail" id="clientEmail" className="border-b border-slate-700 xl:w-96 py-1 px-2 w-[80%]" />
            </div>

            <div className='flex flex-col xl:flex-row xl:items-center items-start xl:justify-between' >
              <label htmlFor='clientPhone' >Phone :</label>
              <input type="tel" name="clientPhone" id="clientPhone" className="border-b border-slate-700 xl:w-96 py-1  px-2 w-[80%]" />
            </div>

            <div className='flex flex-col xl:flex-row xl:items-center items-start xl:justify-between' >
              <label htmlFor='clientAddress' >Address :</label>
              <input type="text" name="clientAddress" id="clientAddress" className="border-b border-slate-700 xl:w-96 py-1  px-2 w-[80%]" />
            </div>

            <div className='flex flex-col xl:flex-row xl:items-center items-start xl:justify-between' >
              <label htmlFor='clientDate' >Date :</label>
              <input type="date" name="clientDate" id="clientDate" className="border-b border-slate-700 xl:w-96 py-1  px-2 w-[80%]" />
            </div>

            <div className='flex flex-col xl:flex-row xl:items-center items-start xl:justify-between' >
              <label >Message :</label>
              <textarea className="border-b border-slate-700 w-96 h-48 p-2" />

            </div>

            <div className='flex justify-center mt-3'><button type='submit' className='bg-transparent px-7 py-2 rounded-md  font-display text-md flex items-center gap-2  border-2 border-gray-400 hover:bg-main hover:border-main  hover:text-white transition-all' >Connect </button></div>

          </form>
        </div>



      </div>




      {/************* 7TH SECTION *************/}


      <div className=' bg-white' >
        <div className='text-center' >
          <h2 className='font-display text-2xl' >Follow us on Instagram</h2>
          <a href={'https://www.instagram.com/productionhillvalley/'} target='_blank' className='font-type text-md cursor-pointer hover:text-main transition-all' >@productionhillvalley</a>

        </div>

        <div className='w-full xl:h-80 h-52 lg:h-64 relative mt-16' >
          <Image src={'/frames.jpg'} layout='fill' objectFit='cover' objectPosition='center' />
        </div>
      </div>






    </div>






  )
}
