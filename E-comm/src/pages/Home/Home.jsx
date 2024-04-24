import React from 'react';
import Banner from '../../components/Banner/Banner';

export default function Home() {
    return (
        <div>
            <h1 className="text-3xl h-[100vh] w-full bg-red-300">
                <Banner />
            </h1>
        </div>
    );
}
