import React, { useEffect, useState } from 'react';
import './PlayVideo.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';
import { API_KEY, value_converter } from '../../data/data';
import moment from 'moment';
//
export default function PlayVideo({ videoId }) {
    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentsData, setCommentData] = useState(null);
    //
    const fetchVideosData = async () => {
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(videoDetails_url)
            .then((response) => {
                return response.json();
            })
            .then((data) => setApiData(data.items[0]))
            .catch((error) => console.log('id data error = ', error));
    };
    const getChannelData = async () => {
        const apiUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}
        `;
        await fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => setChannelData(data.items[0]))
            .catch((e) => console.log(e));
    };
    const getCommentsData = async () => {
        const apiUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
        await fetch(apiUrl)
            .then((res) => console.log(res.json()))
            .catch((e) => console.log(e));
    };
    //
    //
    // comments data mil gaya kal loop laga show karna hai bs
    //
    //
    useEffect(() => {
        fetchVideosData();
        getChannelData();
        getCommentsData();
    }, []);
    // console.log(apiData);
    return (
        <div className="play-video">
            {/* <video src={video1} muted controls autoPlay></video> */}
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            <h3>{apiData ? apiData.snippet.title : 'title here'}</h3>
            <div className="play-video-info">
                <p>
                    {/* {value_converter(apiData.statistics.viewCount)}{' '} */}
                    Views &bull;{' '}
                    {apiData &&
                        moment(apiData.snippet.publishedAt).fromNow()}
                </p>
                <div className="">
                    <span>
                        <img src={like} alt="" />{' '}
                        {apiData &&
                            value_converter(
                                apiData.statistics.likeCount
                            )}
                    </span>
                    <span>
                        <img src={dislike} alt="" /> 2
                    </span>
                    <span>
                        <img src={share} alt="" /> Share
                    </span>
                    <span>
                        <img src={save} alt="" /> Save
                    </span>
                </div>
            </div>
            <hr />

            <div className="publisher">
                <img
                    src={
                        channelData &&
                        channelData.snippet.thumbnails.medium.url
                    }
                    alt=""
                />
                <div className="">
                    <p>{apiData && apiData.snippet.channelTitle}</p>
                    <span>
                        {channelData &&
                            value_converter(
                                channelData.statistics.subscriberCount
                            )}{' '}
                        Subscibers
                    </span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-description">
                <p>{apiData && apiData.snippet.title}</p>
                <p>
                    {apiData &&
                        apiData.snippet.description.slice(0, 200)}
                </p>
                <hr />
                <h4>
                    {value_converter(
                        apiData && apiData.statistics.commentCount
                    )}{' '}
                    comments
                </h4>
                <div className="comment">
                    <img src={user_profile} />
                    <div className="">
                        <h3>
                            Jack Nicholson <span>1 hour ago</span>
                        </h3>
                        <p>
                            This is a comment! Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Error,
                            consequatur!
                        </p>
                        <div className="comment-action">
                            <img src={like} alt="" /> <span>9M</span>
                            <img src={dislike} alt="" />{' '}
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} />
                    <div className="">
                        <h3>
                            Jack Nicholson <span>1 hour ago</span>
                        </h3>
                        <p>
                            This is a comment! Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Error,
                            consequatur!
                        </p>
                        <div className="comment-action">
                            <img src={like} alt="" /> <span>9M</span>
                            <img src={dislike} alt="" />{' '}
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} />
                    <div className="">
                        <h3>
                            Jack Nicholson <span>1 hour ago</span>
                        </h3>
                        <p>
                            This is a comment! Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Error,
                            consequatur!
                        </p>
                        <div className="comment-action">
                            <img src={like} alt="" /> <span>9M</span>
                            <img src={dislike} alt="" />{' '}
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} />
                    <div className="">
                        <h3>
                            Jack Nicholson <span>1 hour ago</span>
                        </h3>
                        <p>
                            This is a comment! Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Error,
                            consequatur!
                        </p>
                        <div className="comment-action">
                            <img src={like} alt="" /> <span>9M</span>
                            <img src={dislike} alt="" />{' '}
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} />
                    <div className="">
                        <h3>
                            Jack Nicholson <span>1 hour ago</span>
                        </h3>
                        <p>
                            This is a comment! Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Error,
                            consequatur!
                        </p>
                        <div className="comment-action">
                            <img src={like} alt="" /> <span>9M</span>
                            <img src={dislike} alt="" />{' '}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
