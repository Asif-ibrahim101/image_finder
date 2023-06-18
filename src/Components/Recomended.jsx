import React, { useState, useEffect } from 'react';
import { createClient } from 'pexels';
import Cards from './Cards';


const client = createClient('Mf6weUtnN2m7GtZ5MjKKtRAKskARhwXJHqq5JKk7Skub1pwPDGaaTkiY');
const query = 'car';

function Recomended() {
    const [Reimages, getReImages] = useState([]);

    useEffect(() => {
        client.photos.search({ query, per_page: 21, page: 1 }).then(photos => {
            getReImages(photos.photos);
        });
    }, []);
    return (
        <>
            <div className="title">
                <h1 className='text-2xl mt-12'>Recommendations For You</h1>
            </div>

            <div className="reImages">
                {
                    <div className="showImages md:py-12 sm:py-4">
                        {Reimages.map((image) => {
                            return (
                                <Cards image={image.src.landscape} photographer= {image.photographer} PhotoUrl={image.url} key={image.id}/>
                            )
                        })}
                    </div>
                }
            </div>
        </>
    )
}

export default Recomended
