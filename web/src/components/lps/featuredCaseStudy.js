import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { CgArrowLongRight as Icon } from 'react-icons/cg';

import MarigoldOval from '../svgs/marigoldOval';

export default function FeaturedCaseStudy({ data }) {
    const { caseStudy, description, heading, image, linkText, sectionHeading } =
        data;

    const {
        asset: { fluid },
    } = image;

    const {
        slug: { current },
    } = caseStudy;
    return (
        <section className="relative mb-80">
            <MarigoldOval />
            <div className="container relative">
                <h2 className="mb-32 text-center">{sectionHeading}</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <Link to={`/${current}`}>
                            <Img fluid={fluid} />
                        </Link>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="w-1/2">
                            <h3 className="mb-12 text-brand-7">{heading}</h3>
                            <p className="mb-12 text-xl">{description}</p>
                            <Link
                                to={`/${current}`}
                                className="group flex text-xl"
                            >
                                {linkText}
                                <Icon className="ml-5 self-center text-brand-7 transform-gpu group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

FeaturedCaseStudy.propTypes = {
    data: PropTypes.object.isRequired,
};
