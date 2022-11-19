import React from 'react';

const FilmComponent = ({films}) => {
    return (
        <div>
            {  films?.length === 0 || !films && <h2 className='text-center' >No Films Found</h2>}
            <div className="pb-32 grid grid-cols-1 lg:grid-cols-3 gap-10 px-6">


            
            {  films?.map(music =>
                (

                    <div className="w-full lg:h-96 h-72">
                        <iframe className="w-full h-full" src={music?.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                )

                )
                
                }
             




            </div>
        </div>
    );
};

export default FilmComponent;