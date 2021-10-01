export default {
    name: 'caseStudyPreview',
    title: 'Work Index Items',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Client Name',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'imageObj',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'backgroundColor',
            title: 'Background Color',
            type: 'string',
            description: `#FBF7E9 is the brand's 'cream' color`,
        },
        {
            name: 'caseStudy',
            title: 'Case Study',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'caseStudy' } }],
            validation: (Rule) => Rule.required(),
        },
    ],
    preview: {
        select: {
            media: 'image',
            subtitle: 'description',
            title: 'name',
        },
    },
};
