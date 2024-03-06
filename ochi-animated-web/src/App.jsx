import React from 'react';
import { LandingPage, Navbar } from './components/index';

function App() {
    return (
        <div>
            <div className="w-full h-screen bg-zinc-300 text-white">
                <Navbar />
                <LandingPage />
            </div>
        </div>
    );
}

export default App;
