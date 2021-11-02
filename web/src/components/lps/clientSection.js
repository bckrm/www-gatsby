import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

export default function ClientSection({ data }) {
    const { heading, clients } = data;
    return (
        <section className="container mb-40">
            <h2 className="lg:max-w-3xl mx-auto mb-24 text-center">
                {heading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                {clients.map((client) => {
                    const { fluid } = client.image.asset;
                    return (
                        <div
                            className="max-w-full flex flex-col justify-center"
                            key={client.image.asset.id}
                        >
                            <Img fluid={fluid} />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

ClientSection.propTypes = {
    data: PropTypes.object.isRequired,
};
