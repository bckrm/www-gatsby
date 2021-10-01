import React from 'react';
import PropTypes from 'prop-types';
import BlockText from '../portableText/blockText';

export default function FormSection({ data }) {
    const { body } = data;
    return (
        <section className="container grid grid-cols-1 lg:grid-cols-2">
            <div className="prose prose-xl w-full">
                <BlockText blocks={body} />
            </div>
        </section>
    );
}

FormSection.propTypes = {
    data: PropTypes.object.isRequired,
};
