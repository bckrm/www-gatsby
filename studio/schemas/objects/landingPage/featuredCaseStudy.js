export default {
    name: 'featuredCaseStudy',
    title: 'Featured Case Study',
    type: 'object',
    fields: [
        {
            name: 'sectionHeading',
            title: 'Section Heading',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Featured Image',
            type: 'imageObj',
        },
        {
            name: 'heading',
            title: 'Case Study Heading',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'caseStudy',
            title: 'Case Study Link',
            type: 'reference',
            to: {
                type: 'caseStudy',
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'linkText',
            title: 'Link Text',
            type: 'string',
        },
    ],
};
