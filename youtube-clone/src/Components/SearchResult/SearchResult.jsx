import React, { useEffect, useState } from 'react';
import './SearchResult.css';
import thumbnail from '../../assets/thumbnail4.png';
import tom from '../../assets/tom.png';
import { API_KEY } from '../../data/data';
import moment from 'moment';
import { Link } from 'react-router-dom';

//
export default function SearchResult({ searchData, isSearched }) {
    const [apiData, setApiData] = useState([]);
    const getSearchData = async () => {
        const apiDataUrl = ` https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchData}&type=video&key=${API_KEY}`;
        await fetch(apiDataUrl)
            .then((resp) => resp.json())
            .then((data) => setApiData(data.items))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        searchData && getSearchData();
        console.log(apiData);
    }, [isSearched]);
    console.log(apiData);
    //
    return (
        <div className="result-container">
            {apiData &&
                apiData.map((item, index) => (
                    <Link
                        to={`/video/0/${item.id.videoId}`}
                        key={index}
                        className="result-item">
                        <div className="thumb">
                            <img
                                src={
                                    item.snippet.thumbnails.medium.url
                                }
                                alt="thumbnail"
                            />
                        </div>
                        <div className="content">
                            <h3>
                                {item.snippet.title.slice(0, 60) +
                                    '...'}
                            </h3>
                            <span>
                                {' '}
                                {moment(
                                    item.snippet.publishedAt
                                ).fromNow()}
                            </span>
                            <div className="author">
                                {/* <img src={tom} alt="author" /> */}
                                <p>{item.snippet.channelTitle}</p>
                            </div>
                            <div className="desc">
                                {item.snippet.description &&
                                    item.snippet.description.slice(
                                        0,
                                        60
                                    ) + '...'}{' '}
                            </div>
                        </div>
                    </Link>
                ))}
        </div>
    );
}
