import React, {useState, useEffect} from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';

function GetPage({getPageNumber, pageNumber}) {
    const [pageNumber, getPageNumber] = useState(1);

    useEffect(() => {
        client.photos.search({ query, per_page: 21, page: pageNumber }).then(photos => {
            getImages(photos.photos);
        });
    }, []);
    return (
        <>
            <button className='px-5' onClick={() => getPageNumber(pageNumber - 1)}>
                <AiOutlineArrowLeft />
            </button>
            <button className='px-5' onClick={() => getPageNumber(pageNumber + 1)}>
                <AiOutlineArrowRight />
            </button>
        </>
    )
}

export default GetPage
