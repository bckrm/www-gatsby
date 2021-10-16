/* eslint-disable import/no-cycle */
import React from 'react';
import PropTypes from 'prop-types';
import BlockText from '../portableText/blockText';

export default function FeatureItem({ node }) {
    return (
        <div>
            {node.title && (
                <h3 className="text-3xl text-brand-7 leading-6 mb-4">
                    {node.title}
                </h3>
            )}
            {/* {node.description && <p>{node.description}</p>} */}
            {node.description.map((item) => {
                const { _key: key } = item;
                return (
                    <div className="text-xl leading-normal" key={key}>
                        <BlockText blocks={item} />
                    </div>
                );
            })}
        </div>
    );
}

FeatureItem.propTypes = {
    node: PropTypes.object.isRequired,
};
