/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Contact from '../components/Contact';
import IndexTextAnimation from '../components/indexTextAnimation';
import IndexCTA from '../components/IndexCTA';
import IndexHero from '../components/IndexHero';
import IndexFeatureSection from '../components/IndexFeatureSection';
import IndexPressSection from '../components/IndexPressSection';

export default function Index({ data }) {
    const {
        barcoding,
        chylene,
        // designTeam,
        // featureImage,
        dcu,
        leslie,
        volo,
    } = data;

    const images = [barcoding, volo, dcu];

    return (
        <Layout hasFooter hasBgColorTransition>
            <SEO title="Home" />
            <IndexHero images={images} />
            <IndexTextAnimation />
            <IndexCTA />
            <IndexFeatureSection images={[leslie, chylene]} />
            <IndexPressSection />
            <Contact />
        </Layout>
    );
}

export const query = graphql`
    query IndexQuery {
        chylene: file(relativePath: { regex: "/chylene/" }) {
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        leslie: file(relativePath: { regex: "/leslie/" }) {
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        featureImage: file(relativePath: { regex: "/kara/" }) {
            childImageSharp {
                fluid(maxWidth: 450) {
                    ...GatsbyImageSharpFluid
                }
            }
            id
        }

        barcoding: file(relativePath: { eq: "subway-takeover.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                }
            }
            id
        }

        volo: file(relativePath: { regex: "/volo-hero/" }) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                }
            }
            id
        }

        dcu: file(relativePath: { regex: "/dcu-index/" }) {
            childImageSharp {
                fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                }
            }
            id
        }

        designTeam: file(relativePath: { eq: "design-team.jpg" }) {
            id
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
