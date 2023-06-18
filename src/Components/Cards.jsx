import React from 'react'

function Cards({ image,photographer, PhotoUrl }) {
    return (
        <>
            <div className='m-2 md:w-[500px] sm:w-[300px] p-5 bg-white rounded-lg shadow-md'>
                <div className="card_image">
                    <img className='w-full rounded-lg' src={image} alt={""} />
                </div>

                <div className="details pt-2 flex justify-between">
                    <p className='photographer'>Photographer: <span className='font-bold px-2'>{photographer}</span></p>
                    <a className='hover:text-red-800' href={PhotoUrl}>Download</a>
                </div>
            </div>
        </>
    )
}

export default Cards
