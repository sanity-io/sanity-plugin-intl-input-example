// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

const languages = ['en', 'es', 'de']
const base = 'en'

const post = {
  title: 'Blog post',
  name: 'post',
  type: 'document',
  i18n: {
    base,
    languages,
    messages: { // (OPTIONAL) You can pass a messages object to override the default messsages shown
      loading: 'Loading languages...',
      missing: 'Missing',
      draft: 'Draft',
      publishing: 'Publishing...',
      publish: 'Publish'
    },
    fieldName: { // (OPTIONAL) You can update the field name(s) the plugin injects
      lang: '__i18n_lang'
    }
  },
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true
          }
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
        }
      ]
    },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }]
    },
  ],
}

const article = {
  title: 'Article',
  name: 'name',
  type: 'document',
  fields: [
    // https://www.sanity.io/docs/schema-types/string-type
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    // https://www.sanity.io/docs/schema-types/image-type
    {
      type: 'object',
      name: 'image',
      options: {
        i18n: true, // enables localization
        base,
        languages,
      },
      fields: [
        {
          title: 'Image',
          name: 'image',
          type: 'image',
          options: {
            hotspot: true, // <-- Defaults to false
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              options: {
                isHighlighted: true // <-- make this field easily accessible
              }
            },
            {
              // Editing this field will be hidden behind an "Edit"-button
              name: 'Caption',
              type: 'string',
              title: 'Attribution',
            }
          ]
        },
      ]
    }
  ],
}

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    post,
    article
  ])
})
