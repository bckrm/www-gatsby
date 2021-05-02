import React from 'react';
import PropTypes from 'prop-types';

export default function ImageCol2({ node }) {
    const {
        leftImage: { asset: lAsset, alt: lAlt },
        rightImage: { asset: rAsset, alt: rAlt },
    } = node;
    return (
        <section className="2-col-image container grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <img className="w-full" src={`${lAsset.url}`} alt={lAlt} />
            <img className="w-full" src={`${rAsset.url}`} alt={rAlt} />
        </section>
    );
}

ImageCol2.propTypes = {
    node: PropTypes.object.isRequired,
};
