import React from 'react';
import PropTypes from 'prop-types';
import PortableText from '../portableText/portableText';

export default function FeaturesSection({ data, heading }) {
    return (
        <div className="container mb-40">
            <h2 className="mb-12 text-center">{heading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {data.map((item) => {
                    const { _key: key } = item;
                    return <PortableText blocks={item} key={key} />;
                })}
            </div>
        </div>
    );
}

FeaturesSection.propTypes = {
    data: PropTypes.object.isRequired,
    heading: PropTypes.string.isRequired,
};
