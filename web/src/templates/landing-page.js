/* remove later */
/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
// import PortableText from '../components/portableText/portableText';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import LpHero from '../components/lps/hero';
import FormSection from '../components/lps/formSection';

export default function LandingPage({ data }) {
    const {
        landingPage: { formBody, hero, title },
    } = data;
    return (
        <Layout hasBgColorTransition>
            <SEO title={title} />
            <LpHero data={hero} />
            <FormSection data={formBody} />
        </Layout>
    );
}

export const query = graphql`
    query LandingPageQuery($id: String!) {
        landingPage: sanityLandingPage(id: { eq: $id }) {
            hero {
                heading
                headingWordAccent
                heroImage {
                    asset {
                        fluid {
                            src
                        }
                    }
                }
            }
            formBody: _rawForm
            title
        }
    }
`;
