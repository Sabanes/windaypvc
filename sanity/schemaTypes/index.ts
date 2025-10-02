import { type SchemaTypeDefinition } from 'sanity'
import { galleryImage } from './images'
import { galleryVideo } from './video'
import post from './blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [galleryImage, galleryVideo, post],
}
