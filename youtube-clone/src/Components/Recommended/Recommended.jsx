import React, { useEffect, useState } from 'react';
import './Recommended.css';
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png';
import { API_KEY, value_converter } from '../../data/data';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default function Recommended({ categoryId }) {
    const [recData, setRecData] = useState([]);
    const getApiDAta = async () => {
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;

        await fetch(videoList_url)
            .then((response) => response.json())
            .then((data) => setRecData(data.items))
            .catch((error) => console.loge(error));
        console.log(recData);
    };
    useEffect(() => {
        getApiDAta();
    }, [categoryId]);
    return (
        <div className="recommended">
            {recData &&
                recData.map((item) => {
                    return (
                        <Link
                            // video/${item.snippet.categoryId}/${item.id}
                            to={`/video/${item.snippet.categoryId}/${item.id}`}
                            key={item.id}
                            className="side-video-list">
                            <img
                                src={
                                    item.snippet.thumbnails.default
                                        .url
                                }
                                alt=""
                            />
                            <div className="vid-info">
                                <h4>
                                    {item.snippet.localized.title}
                                </h4>
                                <p>{item.snippet.channelTitle}</p>
                                <p>
                                    {value_converter(
                                        item.statistics.viewCount
                                    )}{' '}
                                    Views
                                </p>
                                <span>
                                    {moment(
                                        item.snippet.publishedAt
                                    ).fromNow()}
                                </span>
                            </div>
                        </Link>
                    );
                })}
        </div>
    );
}
