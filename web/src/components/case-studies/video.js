/* eslint-disable react/prop-types */
import React from 'react';

export default function Video({ node }) {
    const { videoUrl, videoTitle } = node;
    return (
        <div className="container w-full mb-16">
            <iframe
                src={videoUrl}
                title={videoTitle}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
                width="100%"
                height="500px"
            />
        </div>
    );
}
