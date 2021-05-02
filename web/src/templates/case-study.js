/* remove later */
/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import PortableText from '../components/portableText/portableText';
import Layout from '../components/Layout';
import SEO from '../components/seo';

export default function CaseStudy({ data }) {
    const {
        caseStudy: { _rawBody, title },
    } = data;
    return (
        <Layout hasTopPadding isCaseStudy>
            <SEO title={title} />
            {_rawBody && <PortableText blocks={_rawBody} name={title} />}
        </Layout>
    );
}

export const query = graphql`
    query CaseStudyQuery($id: String!) {
        caseStudy: sanityCaseStudy(id: { eq: $id }) {
            title
            _rawBody(resolveReferences: { maxDepth: 10 })
        }
    }
`;
