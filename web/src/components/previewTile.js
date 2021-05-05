import React from 'react';
import PropTypes from 'prop-types';

// import Img from 'gatsby-image'

import { Link } from 'gatsby';

export default function PreviewTile({ data }) {
    const { node } = data;
    const style = { backgroundColor: node.backgroundColor };
    return (
        <Link
            className="block m-4"
            style={style}
            to={`/work/${node.caseStudy[0].slug.current}`}
            key={node.id}
        >
            {node.image && (
                <img
                    className="w-full"
                    src={`${node.image.asset.url}`}
                    alt=""
                />
            )}
            {node.description && (
                <p className="p-8 text-5xl leading-tight">{node.description}</p>
            )}
        </Link>
    );
}

PreviewTile.propTypes = {
    data: PropTypes.object.isRequired,
};
