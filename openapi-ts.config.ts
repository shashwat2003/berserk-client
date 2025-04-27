import { defaultPlugins, defineConfig } from '@hey-api/openapi-ts'
import { getSchemaUrl } from './src/services/api/base'

export default defineConfig({
  input: getSchemaUrl(),
  output: 'src/services/api/gen',
  plugins: [...defaultPlugins, '@hey-api/client-fetch', '@tanstack/react-query', 'zod'],
})
