import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'doc_2',
  title: 'Đại hội cỗ đông',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Tên tài liệu',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link drive tài liệu',
      type: 'string',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      // author: 'author.name',
      media: 'mainImage',
    },
    // prepare(selection) {
    //   const {author} = selection
    //   return {...selection, subtitle: author && `by ${author}`}
    // },
  },
})
