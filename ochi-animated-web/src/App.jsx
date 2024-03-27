import React from 'react';
import {
    About,
    Eyes,
    LandingPage,
    Marquee,
    Navbar,
} from './components/index';

function App() {
    return (
        <div>
            <div className="w-full  min-h-screen bg-zinc-800   text-white">
                <Navbar />
                <LandingPage />
                <Marquee />
                <About />
                <Eyes />
            </div>
        </div>
    );
}

export default App;
