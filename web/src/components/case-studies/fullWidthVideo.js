/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';

export default function FullWidthVideo({ node }) {
    const {
        video: { asset: videoAsset },
    } = node;

    return (
        <section className="container mb-16">
            <video className="w-full" autoPlay loop muted>
                <source src={videoAsset.url} type="video/mp4" />
            </video>
        </section>
    );
}

FullWidthVideo.propTypes = {
    node: PropTypes.object.isRequired,
};
