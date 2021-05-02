import React from 'react';
import PropTypes from 'prop-types';

export default function Description({ node }) {
    const { description, name } = node;
    return (
        <section className="case-study-desctiption container grid grid-cols-1 lg:grid-cols-6 gap-12 mb-16">
            <h2 className="lg:col-span-2">{name}</h2>
            <p className="lg:col-start-3 lg:col-end-7 max-w-prose">
                {description}
            </p>
        </section>
    );
}

Description.propTypes = {
    node: PropTypes.object.isRequired,
};
