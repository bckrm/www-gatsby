/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';

export default function TwoColWithVideo({ node }) {
    const {
        image: { asset: imageAsset },
        video: { asset: videoAsset },
    } = node;

    return (
        <section className="2-col-video container grid grid-cols-1 lg:grid-cols-6 gap-4 mb-16">
            <video className="lg:col-span-4 lg:pr-8" autoPlay loop muted>
                <source src={videoAsset.url} type="video/mp4" />
            </video>

            <img
                className="lg:col-start-5 lg:col-end-7 "
                src={`${imageAsset.url}`}
                alt={imageAsset.alt}
            />
        </section>
    );
}

TwoColWithVideo.propTypes = {
    node: PropTypes.object.isRequired,
};
