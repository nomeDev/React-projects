import React from 'react';

export default function Newsletter() {
    return <div>
        <div className={`w-full min-h-[40vh] bg-gray-400 bg-[url(./images/newsletter-bg.jpeg)] bg-center bg-cover flex items-center justify-center`}>
            <div className="container text-center">
                <p>NEWSLETTER</p>
                <h3>SIGN UP FOR LATEST UPDATES AND OFFERS</h3>
                <div className="input">
                    <input type="text" />
                    <button>Subscribe</button>
                    
                </div>
                <p>Will be used in accordance with out Privacy Policy</p>
                <div className="icons">Icons here..</div>
            </div>
        </div>

    </div>;
}
