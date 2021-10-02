import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Masonry from 'react-masonry-css';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Hero from '../components/Hero';
import PreviewTile from '../components/previewTile';

export const query = graphql`
    query WorkQuery {
        sanityWorkIndexPage {
            hero
            previewTiles {
                backgroundColor
                caseStudy {
                    slug {
                        current
                    }
                }
                description
                id
                image {
                    asset {
                        url
                    }
                }
            }
        }
    }
`;

export default function Work({ data }) {
    const {
        sanityWorkIndexPage: { hero, previewTiles },
    } = data;

    const breakpointColumnsObj = {
        default: 3,
        1280: 3,
        1024: 2,
        800: 1,
    };

    return (
        <Layout isCaseStudy>
            <SEO title="Work" />
            <Hero heading={hero} />
            <div className="container">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid flex"
                    columnClassName="my-masonry-grid_column"
                >
                    {previewTiles.map((item) => {
                        return <PreviewTile data={item} />;
                    })}
                </Masonry>
            </div>
        </Layout>
    );
}

Work.propTypes = {
    data: PropTypes.object.isRequired,
};
