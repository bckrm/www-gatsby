/* remove later */
/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
// import PortableText from '../components/portableText/portableText';
import Layout from '../components/Layout';
import SEO from '../components/newSeo';
import LpHero from '../components/lps/hero';
import FormSection from '../components/lps/formSection';
import ClientSection from '../components/lps/clientSection';
import FeaturesSection from '../components/lps/featuresSection';
import Quote from '../components/lps/quote';
import FeaturedCaseStudy from '../components/lps/featuredCaseStudy';
import Contact from '../components/Contact';
import TeamSection from '../components/TeamSection';

export default function LandingPage({ data }) {
    const {
        landingPage: {
            clients,
            featuredCaseStudy,
            featuresHeading,
            formBody,
            formHeading,
            hero,
            team,
            teamSectionBool,
            teamSectionHeading,
            _rawFeatures,
            quote,
            seo,
        },
    } = data;

    return (
        <Layout hasBgColorTransition hasFooter>
            <SEO data={seo} />
            <LpHero data={hero} />
            <FormSection data={formBody} heading={formHeading} />
            <ClientSection data={clients} />
            <FeaturesSection data={_rawFeatures} heading={featuresHeading} />
            <Quote data={quote} />
            <FeaturedCaseStudy data={featuredCaseStudy} />
            {teamSectionBool && (
                <TeamSection heading={teamSectionHeading} team={team} />
            )}
            <Contact />
        </Layout>
    );
}

export const query = graphql`
    fragment SanityImage on SanityImage {
        crop {
            _key
            _type
            top
            bottom
            left
            right
        }
        hotspot {
            _key
            _type
            x
            y
            height
            width
        }
        asset {
            _id
        }
    }
    query LandingPageQuery($id: String!) {
        landingPage: sanityLandingPage(id: { eq: $id }) {
            clients {
                clients {
                    image {
                        asset {
                            fluid(maxWidth: 300) {
                                ...GatsbySanityImageFluid
                            }
                            id
                        }
                    }
                }
                heading
            }
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
            formHeading
            title
            featuresHeading
            _rawFeatures(resolveReferences: { maxDepth: 10 })
            quote {
                name
                quote
            }
            featuredCaseStudy {
                caseStudy {
                    slug {
                        current
                    }
                }
                description
                heading
                image {
                    asset {
                        fluid(maxWidth: 900) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
                linkText
                sectionHeading
            }
            team {
                id
                name
                title
                image {
                    ...SanityImage
                }
            }
            teamSectionBool
            teamSectionHeading
            seo {
                image {
                    asset {
                        fluid {
                            src
                        }
                    }
                }
                pageDescription
                pageTitle
            }
        }
    }
`;
