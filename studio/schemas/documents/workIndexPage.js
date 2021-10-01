export default {
    name: 'workIndexPage',
    title: 'Work Page',
    type: 'document',
    __experimental_actions: [
        'create',
        'update',
        // 'delete',
        'publish',
    ],
    fields: [
        {
            name: 'pageTitle',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'hero',
            title: 'Hero',
            type: 'text',
        },
        // {
        //     name: 'team',
        //     title: 'Team',
        //     type: 'array',
        //     of: [
        //         {
        //             type: 'reference',
        //             to: [
        //                 {
        //                     type: 'team',
        //                 },
        //             ],
        //         },
        //     ],
        // },
        {
            name: 'previewTiles',
            title: 'Preview Tiles',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'caseStudyPreview' }] }],
        },
    ],
};
