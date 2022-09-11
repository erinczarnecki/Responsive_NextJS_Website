import InstagramImg from './InstagramImg';
import IG1 from '../public/social/IG2.jpg';
import IG2 from '../public/social/IG1.jpg';
import IG3 from '../public/social/IG3.jpg';
import IG4 from '../public/social/IG4.jpg';
import IG5 from '../public/social/IG5.jpg';

import React from 'react'

const Instagram = () => {
    return (
        <div className="max-w-[1240px] mx-auto text-center py-24">
            <p className="text-2xl font-bold">Follow me on Instagram</p>
            <p className="pb-4">@Travelr</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
                <a href="https://instagram.com" target="_blank"><InstagramImg socialImg={IG1} /></a>
                <a href="https://instagram.com" target="_blank"><InstagramImg socialImg={IG2} /></a>
                <a href="https://instagram.com" target="_blank"><InstagramImg socialImg={IG3} /></a>
                <a href="https://instagram.com" target="_blank"><InstagramImg socialImg={IG4} /></a>
                <a href="https://instagram.com" target="_blank"><InstagramImg socialImg={IG5} /></a>
            </div>
        </div>
    )
}

export default Instagram
