export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {
          name: 'pt',
          title: 'Portuguese',
          type: 'string',
          validation: (Rule: any) => Rule.required()
        },
        {
          name: 'en',
          title: 'English',
          type: 'string',
          validation: (Rule: any) => Rule.required()
        },
        {
          name: 'uk',
          title: 'Ukrainian',
          type: 'string',
          validation: (Rule: any) => Rule.required()
        }
      ]
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.pt',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Windows', value: 'windows'},
          {title: 'Doors', value: 'doors'},
          {title: 'Installation', value: 'installation'},
          {title: 'Maintenance', value: 'maintenance'},
          {title: 'Design', value: 'design'},
        ]
      }
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'object',
      fields: [
        {
          name: 'pt',
          title: 'Portuguese',
          type: 'text',
          rows: 4
        },
        {
          name: 'en',
          title: 'English',
          type: 'text',
          rows: 4
        },
        {
          name: 'uk',
          title: 'Ukrainian',
          type: 'text',
          rows: 4
        }
      ]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'object',
      fields: [
        {
          name: 'pt',
          title: 'Portuguese',
          type: 'array',
          of: [
            {
              type: 'block'
            },
            {
              type: 'image',
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text',
                }
              ]
            }
          ]
        },
        {
          name: 'en',
          title: 'English',
          type: 'array',
          of: [
            {
              type: 'block'
            },
            {
              type: 'image',
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text',
                }
              ]
            }
          ]
        },
        {
          name: 'uk',
          title: 'Ukrainian',
          type: 'array',
          of: [
            {
              type: 'block'
            },
            {
              type: 'image',
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text',
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'object',
      fields: [
        { name: 'pt', title: 'Portuguese', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'uk', title: 'Ukrainian', type: 'string' }
      ]
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'object',
      fields: [
        { name: 'pt', title: 'Portuguese', type: 'text', rows: 3 },
        { name: 'en', title: 'English', type: 'text', rows: 3 },
        { name: 'uk', title: 'Ukrainian', type: 'text', rows: 3 }
      ]
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Keywords for SEO, separated by commas.'
    }
  ],
  preview: {
    select: {
      title: 'title.pt',
      author: 'author',
      media: 'mainImage',
    },
    prepare(selection: any) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
}