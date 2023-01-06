import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'doc_1',
  title: 'Thông tin công bố',
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
      title: 'name',
      // author: 'author.name',
    },
    // prepare(selection) {
    //   const {author} = selection
    //   return {...selection, subtitle: author && `by ${author}`}
    // },
  },
})
