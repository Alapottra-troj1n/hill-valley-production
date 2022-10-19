import Image from 'next/image';
import React from 'react';


const Post = () => {




    return (
        <div className="text-white " >
            <div className="flex justify-center items-center bg-[url('https://i.ibb.co/nCQbXL2/74387413-2447623832174963-8578973925654921216-n-1.jpg')] bg-no-repeat bg-cover bg-bottom bg-black lg:h-[80vh] h-[50vh] bg-fixed" >

                <h2 className='font-display text-center text-3xl lg:text-7xl font-semibold' >MEGHNA & KARAN</h2>

            </div>

            <div className='py-24 container mx-auto text-slate-500 font-normal font-type  lg:px-40  px-4'>




                {/*************** PHOTOS START FROM HERE ***************/}
                <h2 className='leading-6 text-xs lg:text-sm lg:leading-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum vitae rerum ratione delectus possimus facere consequuntur ea necessitatibus provident itaque. Corrupti, voluptas debitis. Aut, recusandae modi ducimus possimus eaque voluptate aliquid quas quos laborum minus iusto temporibus ab quo vero officia asperiores necessitatibus doloribus praesentium? Molestiae totam ea, sequi veniam quibusdam unde nesciunt. Culpa perspiciatis, ipsa,  sunt unde nostrum cupiditate possimus</h2>

                <div className="py-20 grid grid-cols-1 lg:px-0 gap-10" >



                    <div className="relative lg:h-[700px] h-[400px] w-full " >
                        <Image src='https://i.ibb.co/nCQbXL2/74387413-2447623832174963-8578973925654921216-n-1.jpg' alt='img1' layout='fill' objectFit='cover' objectPosition={'center'} />
                    </div>

                    <div className="relative lg:h-[700px] h-[400px] w-full " >
                        <Image src='https://i.ibb.co/nCQbXL2/74387413-2447623832174963-8578973925654921216-n-1.jpg' alt='img2' layout='fill' objectFit='cover' objectPosition={'center'} />
                    </div>

                    {/***************** 2 COLUMNS *****************/}

                    <div className="grid grid-cols-2 gap-10">

                        <div className="relative lg:h-[700px] h-[400px] w-full " >
                            <Image src='https://i.ibb.co/nCQbXL2/74387413-2447623832174963-8578973925654921216-n-1.jpg' alt='img3' layout='fill' objectFit='cover' objectPosition={'center'} />
                        </div>
                        <div className="relative lg:h-[700px] h-[400px] w-full " >
                            <Image src='https://i.ibb.co/nCQbXL2/74387413-2447623832174963-8578973925654921216-n-1.jpg' alt='img4' layout='fill' objectFit='cover' objectPosition={'center'} />
                        </div>

                    </div>

                    <div className="relative lg:h-[700px] h-[400px] w-full " >
                        <Image src='https://i.ibb.co/nCQbXL2/74387413-2447623832174963-8578973925654921216-n-1.jpg' alt='img5' layout='fill' objectFit='cover' objectPosition={'center'} />
                    </div>

                    <div className="relative lg:h-[700px] h-[400px] w-full " >
                        <Image src='https://i.ibb.co/nCQbXL2/74387413-2447623832174963-8578973925654921216-n-1.jpg' alt='img6' layout='fill' objectFit='cover' objectPosition={'center'} />
                    </div>


                    {/***************** 2 COLUMNS *****************/}

                    <div className="grid grid-cols-2 gap-10">

                        <div className="relative lg:h-[700px] h-[400px] w-full " >
                            <Image src='https://i.ibb.co/nCQbXL2/74387413-2447623832174963-8578973925654921216-n-1.jpg' alt='img7' layout='fill' objectFit='cover' objectPosition={'center'} />
                        </div>
                        <div className="relative lg:h-[700px] h-[400px] w-full " >
                            <Image src='https://i.ibb.co/nCQbXL2/74387413-2447623832174963-8578973925654921216-n-1.jpg' alt='img8' layout='fill' objectFit='cover' objectPosition={'center'} />
                        </div>

                    </div>



                    <div className="relative lg:h-[700px] h-[400px] w-full " >
                        <Image src='https://i.ibb.co/nCQbXL2/74387413-2447623832174963-8578973925654921216-n-1.jpg' layout='fill' alt='img9' objectFit='cover' objectPosition={'center'} />
                    </div>

                    <div className="relative lg:h-[700px] h-[400px] w-full " >
                        <Image src='https://i.ibb.co/nCQbXL2/74387413-2447623832174963-8578973925654921216-n-1.jpg' layout='fill' alt='img10' objectFit='cover' objectPosition={'center'} />
                    </div>




                </div>





            </div>

            <div className='text-slate-500 pb-10' >
                <div className='text-center' >
                    <h2 className='font-display text-2xl' >Follow us on Instagram</h2>
                    <a href={'https://www.instagram.com/productionhillvalley/'} target='_blank' rel="noreferrer" className='font-type text-md cursor-pointer hover:text-main transition-all' >@productionhillvalley</a>

                </div>

            </div>









        </div>
    );
};

export default Post;