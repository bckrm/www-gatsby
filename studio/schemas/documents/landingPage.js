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
            name: 'formFields',
            title: 'Form Fields',
            type: 'string',
            description:
                'Comma separated list of form fields names (First Name, LastName, Email address)',
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
            name: 'clients',
            title: 'Client Section',
            type: 'lpClients',
        },
        {
            name: 'quotes',
            title: 'Quotes',
            type: 'array',
            of: [
                {
                    type: 'quote',
                },
            ],
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
            type: 'text',
        },
    ],
};
