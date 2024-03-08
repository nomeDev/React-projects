import React from 'react';
import { LandingPage, Marquee, Navbar } from './components/index';

function App() {
    return (
        <div>
            <div className="w-full  min-h-screen bg-zinc-800   text-white">
                <Navbar />
                <LandingPage />
                <Marquee />
            </div>
        </div>
    );
}

export default App;
