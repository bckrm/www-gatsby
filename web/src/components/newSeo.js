import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

export default function SEO({ data }) {
    const { pageTitle, pageDescription, image } = data;
    const {
        asset: {
            fluid: { src: imgSrc },
        },
    } = image;

    console.log(Boolean(image));

    return (
        <Helmet
            htmlAttributes={{
                lang: 'en',
            }}
            title={pageTitle}
            meta={[
                {
                    name: `description`,
                    content: pageDescription,
                },
                {
                    property: `og:title`,
                    content: pageTitle,
                },
                {
                    property: `og:description`,
                    content: pageDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: pageDescription,
                },
                {
                    name: `twitter:title`,
                    content: pageTitle,
                },
                {
                    name: `twitter:description`,
                    content: pageDescription,
                },
            ]
                .concat(
                    image
                        ? [
                              {
                                  property: 'og:image',
                                  content: imgSrc,
                              },
                              {
                                  name: 'twitter:card',
                                  content: 'summary_large_image',
                              },
                          ]
                        : [
                              {
                                  name: 'twitter:card',
                                  content: 'summary',
                              },
                          ],
                )
                .concat()}
        />
    );
}

SEO.propTypes = {
    data: PropTypes.object.isRequired,
};
