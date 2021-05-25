import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    let renderedVideoList = videos.map(video => {
        return <VideoItem onVideoSelect={onVideoSelect} video={video} key={video.id.videoId} />
    });

    return (
        <div className="ui relaxed divided list">
            {renderedVideoList}
        </div>
    );
}

export default VideoList;