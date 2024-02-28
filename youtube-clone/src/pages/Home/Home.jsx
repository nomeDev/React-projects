import React, { useState } from 'react';
import './Home.css';
import { Feed, Sidebar } from '../../Components';
import SearchResult from '../../Components/SearchResult/SearchResult';

//
export default function Home({ sidebar, searchData, isSearched }) {
    const [category, setCategory] = useState(0);
    // const [isSearched, setIsSearched] = useState(false);

    //
    return (
        <>
            <Sidebar
                sidebar={sidebar}
                category={category}
                setCategory={setCategory}
            />
            {!isSearched ? (
                <div
                    className={`container ${
                        sidebar ? '' : 'large-container'
                    }`}>
                    <Feed category={category} />
                </div>
            ) : (
                <div
                    className={
                        sidebar ? 'nm-container' : 'lg-container'
                    }>
                    <SearchResult
                        isSearched={isSearched}
                        searchData={searchData}
                    />
                </div>
            )}
        </>
    );
}
