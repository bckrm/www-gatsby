export default {
    name: 'landingPage',
    type: 'document',
    title: 'Landing Pages',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'Title',
        },
        {
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'hero',
            title: 'Hero',
            type: 'lpHero',
        },
        {
            name: 'form',
            title: 'Form Section',
            type: 'lpForm',
        },
        {
            name: 'formHeading',
            title: 'Form Heading',
            type: 'string',
        },
        {
            name: 'clients',
            title: 'Client Section',
            type: 'lpClients',
        },
        {
            name: 'featuresHeading',
            title: 'Features Heading',
            type: 'string',
        },
        {
            name: 'features',
            title: 'Feature Section',
            type: 'array',
            of: [
                {
                    type: 'lpFeatures',
                },
            ],
        },
        {
            name: 'quote',
            title: 'Quote',
            type: 'quote',
        },
        {
            name: 'featuredCaseStudy',
            title: 'Featured Case Study',
            type: 'featuredCaseStudy',
        },
        {
            name: 'teamSectionBool',
            title: 'Team Section Select',
            type: 'string',
            options: {
                list: [{ title: 'Add Team Section', value: 'true' }], // <-- predefined values
                // layout: 'radio', // <-- defaults to 'dropdown'
            },
            description: `If 'Add Team Section' is selected all active team members will be added to this landing page.`,
        },
        {
            hidden: ({ document }) => !document?.teamSectionBool,
            name: 'teamSectionHeading',
            title: 'Team Section Heading',
            type: 'string',
        },
        {
            hidden: ({ document }) => !document?.teamSectionBool,
            // hidden: false,
            name: 'team',
            title: 'Team',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'team',
                        },
                    ],
                },
            ],
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo',
        },
    ],
};
