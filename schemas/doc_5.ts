import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'doc_5',
  title: 'Quản trị công ty',
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
  },
})
