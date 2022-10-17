import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.css'
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

      <div className='py-32 bg-white container mx-auto  font-type px-16'>

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



      <div className='py-32 bg-sky-50/50' >
        <div className='container mx-auto' >
          <h2 className='font-display text-center text-3xl font-semibold' >OUR PACKAGES</h2>

          HiOutlineMinus
          {/***************** PACKAGES *****************/}

          <div className='grid grid-cols-3 mt-20' >


            <div className='flex flex-col bg-white p-12' >

              <div className='text-center font-display font-semibold' >
                <div className='flex justify-center' >
                  <div className='border-b-2' ></div>
                  <h2 className='text-2xl ' >THE BASIC</h2>
                  <div className='border-b-2' ></div>
                </div>
              </div>


            </div>

            <div>

            </div>

            <div>

            </div>


          </div>



        </div>


      </div>











    </div>






  )
}
