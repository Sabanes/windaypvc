import { type SchemaTypeDefinition } from 'sanity'
import { galleryImage } from './images'
import { galleryVideo } from './video'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [galleryImage, galleryVideo],
}
