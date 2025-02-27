export default {
  title: 'Marathon',
  name: 'marathon',
  type: 'document',
  fields: [
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{ type: 'user'}]
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string'
    },
    {
      title: 'Photo',
      name: 'photo',
      type: 'image'
    },
    {
      title: 'Likes',
      name: 'likes',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'user'}]
        }
      ]
    },
    {
      title: 'Comments',
      name: 'comments',
      type: 'array',
      of: [
        {
          title: 'Comment',
          name: 'comment',
          type: 'document',
          fields: [
            {
              title: 'Author',
              name: 'author',
              type: 'reference',
              to: [{ type: 'user'}]
            },
            {
              title: 'Comment',
              name: 'comment',
              type: 'string'
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      authorName: 'author.name',
      authorUsername: 'author.username',
      media: 'photo'
    },
    prepare(selection) {
      const {title, authorName, authorUsername, media} = selection;
      return {
        title,
        subtitle: `by ${authorName} (${authorUsername})`,
        media
      }
    }
  }
}