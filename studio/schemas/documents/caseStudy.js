export default {
    name: 'caseStudy',
    type: 'document',
    title: 'Case Study',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'Client name',
        },
        {
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
            },
        },
        {
            name: 'featuredContent',
            title: 'Featured Content',
            type: 'featuredContent',
        },
        {
            name: 'body',
            type: 'caseStudyBodyPortableText',
            title: 'Body',
        },
    ],
};
