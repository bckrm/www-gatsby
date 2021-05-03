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
        },
        {
            name: 'caseStudy',
            title: 'Case Study',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'caseStudy' } }],
            validation: (Rule) => Rule.required(),
        },
    ],
};
