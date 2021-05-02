export default {
    name: 'featuredContent',
    title: 'Featured Content',
    type: 'object',
    fields: [
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'imageObj',
        },
    ],
    description:
        'This content will be displayed if the case study is featured on the home page',
};
