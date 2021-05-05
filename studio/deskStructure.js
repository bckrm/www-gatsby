import S from '@sanity/desk-tool/structure-builder';

export default () =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Info Page')
                .child(
                    S.editor().schemaType('infoPage').documentId('infoPage'),
                ),
            S.listItem()
                .title('Work Page')
                .child(
                    S.editor()
                        .schemaType('workIndexPage')
                        .documentId('workIndexPage'),
                ),
            ...S.documentTypeListItems().filter(
                (listItem) =>
                    !['infoPage', 'workIndexPage'].includes(listItem.getId()),
            ),
        ]);
