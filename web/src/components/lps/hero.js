import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

export default function LpHero({ data }) {
    const { heading, headingWordAccent } = data;
    const headingArr = heading.split(' ');

    const headingHtml = headingArr.map((item) => {
        return item === headingWordAccent
            ? `<span className="text-brand-7">${item}</span>`
            : item;
    });

    const parsedHeading = parse(headingHtml.join(' '));

    return (
        <section className="flex flex-col justify-center items-center pt-16 min-h-screen">
            <div className="container">
                <h1 className="text-center">{parsedHeading}</h1>
            </div>
        </section>
    );
}

LpHero.propTypes = {
    data: PropTypes.shape({
        heading: PropTypes.string.isRequired,
        headingWordAccent: PropTypes.string.isRequired,
    }).isRequired,
};
