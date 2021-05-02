import React from 'react';
import PropTypes from 'prop-types';

export default function FullWidthImage({ node }) {
    const { alt, asset } = node;
    return (
        <section className="case-study-hero container mb-16">
            <img className="w-full" src={`${asset.url}`} alt={alt} />
        </section>
    );
}

FullWidthImage.propTypes = {
    node: PropTypes.object.isRequired,
};
