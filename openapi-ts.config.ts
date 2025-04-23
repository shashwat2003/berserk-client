import { getSchemaUrl } from '@/services/api/base'
import { defaultPlugins, defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
  input: getSchemaUrl(),
  output: 'src/client',
  plugins: [...defaultPlugins, '@hey-api/client-fetch', '@tanstack/react-query'],
})
