export default {
    name: 'seo',
    title: 'SEO',
    type: 'object',
    fields: [
        {
            name: 'pageTitle',
            title: 'Page Title',
            type: 'string',
        },
        {
            name: 'pageDescription',
            title: 'Page Description',
            type: 'text',
            description: 'Should not be longer than 297 characters',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
    ],
};
