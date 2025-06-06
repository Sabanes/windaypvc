// schemas/galleryVideo.ts
import {defineField, defineType} from 'sanity'

export const galleryVideo = defineType({
  name: 'galleryVideo',
  title: 'Gallery Video',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Video Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of the video',
    }),
    defineField({
      name: 'videoFile',
      title: 'Video File',
      type: 'file',
      options: {
        accept: 'video/*'
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Video Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Thumbnail image for the video (optional - will use video frame if not provided)',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Project', value: 'project'},
          {title: 'Behind the Scenes', value: 'behind-scenes'},
          {title: 'Tutorial', value: 'tutorial'},
          {title: 'Showcase', value: 'showcase'},
        ]
      }
    }),
    defineField({
      name: 'duration',
      title: 'Duration (seconds)',
      type: 'number',
      description: 'Video duration in seconds (optional)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail'
    }
  }
})