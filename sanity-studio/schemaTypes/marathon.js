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
      title: 'Date',
      name: 'date',
      type: 'string'
    },
    {
      title: 'Region',
      name: 'region',
      type: 'string'
    },
    {
      title: 'Location',
      name: 'location',
      type: 'string'
    },
  {
      title: 'Events',
      name: 'events',
      type: 'array',
      of: [
        {
          type: 'string',
        }
      ]
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number'
    },
    {
      title: 'StartDate',
      name: 'startDate',
      type: 'string'
    },
    {
      title: 'EndDate',
      name: 'endDate',
      type: 'string'
    },
    {
      title: 'Url',
      name: 'url',
      type: 'string'
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image'
    },
    {
      title: 'IsClosed',
      name: 'isClosed',
      type: 'boolean'
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