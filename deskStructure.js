import * as Structure from 'sanity-plugin-intl-input/lib/structure';
import S from '@sanity/desk-tool/structure-builder'

export const getDefaultDocumentNode = (props) => {
  if (props.schemaType === 'post') {
    // The document wide i18n types
    return S.document().views(Structure.getDocumentNodeViewsForSchemaType(props.schemaType));
  }
  return S.document();
};

export default Structure.default;