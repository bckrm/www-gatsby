export default {
    name: 'lpHero',
    title: 'Hero',
    type: 'object',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'headingWordAccent',
            title: 'Heading Accents',
            type: 'string',
            description: 'Enter word(s) to apply accent styling',
        },
        {
            name: 'heroImage',
            title: 'Hero Image',
            type: 'imageObj',
        },
    ],
};
