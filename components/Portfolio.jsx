import React from 'react';
import Image from 'next/image';

const Portfolio = () => {
    return (
        <div className="max-w-[1240px] mx-auto py-16 text-center">
            <h1 className="font-bold text-2xl p-4">Travel Photos</h1>
            <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
                <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
                    <Image
                        src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        alt="/"
                        layout="responsive"
                        width="677"
                        height="451"
                    />
                </div>


                <div className="w-full h-full">
                    <Image
                        src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
                        alt="/"
                        layout="responsive"
                        width="215"
                        height="217"
                        objectFit="cover"
                    />
                </div>
                <div className="w-full h-full">
                    <Image
                        src="https://images.unsplash.com/photo-1529397938791-2aba4681454f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                        alt="/"
                        layout="responsive"
                        width="215"
                        height="217"
                        objectFit="cover"
                    />
                </div>
                <div className="w-full h-full">
                    <Image
                        src="https://images.unsplash.com/photo-1489702932289-406b7782113c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
                        alt="/"
                        layout="responsive"
                        width="215"
                        height="217"
                        objectFit="cover"
                    />
                </div>
                <div className="w-full h-full">
                    <Image
                        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1721&q=80"
                        alt="/"
                        layout="responsive"
                        width="215"
                        height="217"
                        objectFit="cover"
                    />
                </div>



            </div>
        </div>
    )
}

export default Portfolio
