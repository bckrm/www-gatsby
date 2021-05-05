import React from 'react';
import PropTypes from 'prop-types';

export default function ImageGridTallImageLeft({ node }) {
    const { bottomImage, tallImage, topImage } = node;
    return (
        <section className="image-grid-tall-left container grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
            <div className="lg:col-span-5 lg:row-span-2">
                <img
                    className="w-full"
                    src={`${tallImage.asset.url}`}
                    alt={tallImage.asset.alt}
                />
            </div>
            <div className="lg:col-start-6 lg:col-end-13">
                <img
                    className="w-full"
                    src={`${topImage.asset.url}`}
                    alt={topImage.asset.alt}
                />
            </div>
            <div className="lg:col-start-6 lg:col-end-13 lg:row-start-2">
                <img
                    className="w-full"
                    src={`${bottomImage.asset.url}`}
                    alt={bottomImage.asset.alt}
                />
            </div>
        </section>
    );
}

ImageGridTallImageLeft.propTypes = {
    node: PropTypes.object.isRequired,
};
