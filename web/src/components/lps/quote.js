import React from 'react';
import PropTypes from 'prop-types';
import SandOval from '../svgs/sandOval';

export default function Quote({ data }) {
    const { name, quote } = data;
    return (
        <div className="relative flex flex-col justify-center align-middle min-h-screen">
            <SandOval />
            <div className="mx-auto relative transform -translate-y-1/4 w-[90%] lg:w-1/2">
                <h2 className="pb-14 text-5xl leading-[120%] body-font font-normal quote-accent">
                    {quote}
                </h2>
                <p className="display-font text-2xl font-bold leading-loose">
                    {name}
                </p>
            </div>
        </div>
    );
}

Quote.propTypes = {
    data: PropTypes.object.isRequired,
};
