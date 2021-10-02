import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

export default function PreviewTile({ data }) {
    const style = { backgroundColor: data.backgroundColor };

    return (
        // <h1>testing</h1>
        <Link
            className="block m-4"
            style={style}
            to={`/work/${data.caseStudy[0].slug.current}`}
            key={data.id}
        >
            {data.image && (
                <img
                    className="w-full"
                    src={`${data.image.asset.url}`}
                    alt=""
                />
            )}
            {data.description && (
                <p className="p-8 text-5xl leading-tight">{data.description}</p>
            )}
        </Link>
    );
}

PreviewTile.propTypes = {
    data: PropTypes.object.isRequired,
};
