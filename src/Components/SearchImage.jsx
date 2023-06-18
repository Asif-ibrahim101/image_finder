import React, { useState, useEffect } from 'react';
import Recomended from './Recomended';
import { createClient } from 'pexels';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';

import Cards from './Cards';


const client = createClient('Mf6weUtnN2m7GtZ5MjKKtRAKskARhwXJHqq5JKk7Skub1pwPDGaaTkiY');

function SearchImage() {
    const [images, getImages] = useState([]);
    const [input, getInput] = useState('');
    const [pageNumber, getPageNumber] = useState(1);
    const query = input;

    const handleChange = (e) => {
        getInput(e.target.value);
    };

    const handleSubmit = () => {
        client.photos.search({ query, per_page: 21, page: pageNumber }).then(photos => {
            getImages(photos.photos);
        });
    };



    useEffect(() => {
        client.photos.search({ query, per_page: 21, page: pageNumber }).then(photos => {
            getImages(photos.photos);
        });
    }, [pageNumber]);
    return (
        <>
            <div className="main_body">
                <div className='flex justify-center align-middle items-center'>
                    <div
                        className="search_box py-2 mt-12 shadow-lg bg-white">
                        <input
                            placeholder='Search Your Image'
                            className='outline-none px-8 py-2' type="text" value={input} onChange={handleChange}
                        />
                        <button className='px-5' onClick={() => handleSubmit()}>
                            <BsSearch />
                        </button>
                    </div>
                </div>

                <div className='flex flex-col justify-center align-middle items-center'>
                    {
                        input.length > 0 ? (
                            <div className="showImages py-12">
                                {images.map((image) => {
                                    return (
                                        <Cards image={image.src.landscape} photographer={image.photographer} PhotoUrl={image.url} key={image.id} />
                                    )
                                })}
                            </div>
                        ) : (<Recomended />)
                    }
                </div>

                {
                    input.length < 0 ? (<Recomended />) : 
                    (
                        <div className="morePages py-8 flex justify-center align-middle items-center">
                            <button className='px-2 mx-5 py-2 rounded-full bg-white' onClick={() => getPageNumber(pageNumber - 1)}>
                                <AiOutlineArrowLeft className='text-2xl' />
                            </button>
                            <button className='px-2 mx-5 py-2 rounded-full bg-white' onClick={() => getPageNumber(pageNumber + 1)}>
                                <AiOutlineArrowRight className='text-2xl' />
                            </button>
                        </div>
                    )
                }
            </div>

        </>
    )
}

export default SearchImage
