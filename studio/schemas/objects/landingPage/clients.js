export default {
    name: 'lpClients',
    title: 'Client Section',
    type: 'object',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'text',
        },
        {
            name: 'clients',
            title: 'Clients',
            type: 'array',
            of: [{ type: 'logo' }],
        },
    ],
};
