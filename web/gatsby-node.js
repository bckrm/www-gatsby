/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
        {
            allSanityCaseStudy {
                edges {
                    node {
                        slug {
                            current
                        }
                        id
                    }
                }
            }
        }
    `);

    if (result.errors) {
        throw result.errors;
    }

    const caseStudies = result.data.allSanityCaseStudy.edges || [];

    caseStudies.forEach((edge) => {
        const path = `/work/${edge.node.slug.current}`;

        createPage({
            path,
            component: require.resolve('./src/templates/case-study.js'),
            context: {
                slug: edge.node.slug.current,
                id: edge.node.id,
            },
        });
    });
};
