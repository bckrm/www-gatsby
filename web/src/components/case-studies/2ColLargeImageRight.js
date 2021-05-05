import React from 'react';
import PropTypes from 'prop-types';

export default function TwoColumnLargeImageRight({ node }) {
    const {
        leftImage: { asset: lAsset, alt: lAlt },
        rightImage: { asset: rAsset, alt: rAlt },
    } = node;
    return (
        <section className="2-col-lg-right container grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
            <div className="lg:col-span-5">
                <img className="w-full" src={`${lAsset.url}`} alt={lAlt} />
            </div>
            <div className="lg:col-start-6 lg:col-end-13">
                <img className="w-full" src={`${rAsset.url}`} alt={rAlt} />
            </div>
        </section>
    );
}

TwoColumnLargeImageRight.propTypes = {
    node: PropTypes.object.isRequired,
};
