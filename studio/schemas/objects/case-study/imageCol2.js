export default {
    name: 'imageCol2',
    title: '2 Column Image Component',
    type: 'object',
    fields: [
        {
            name: 'leftImage',
            title: 'Left Image',
            type: 'imageObj',
        },
        {
            name: 'rightImage',
            title: 'Right Image',
            type: 'imageObj',
        },
    ],
    preview: {
        select: {
            imageUrl: 'asset.url',
            title: 'caption',
        },
    },
};
