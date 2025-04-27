import type { AnyFieldMeta } from '@tanstack/react-form'
import type { ThemeName } from 'tamagui'

export const getThemeNameForStatus = (meta: AnyFieldMeta): ThemeName | undefined => {
  if (!meta.isTouched) return undefined

  if (meta.isValidating) {
    return 'warning'
  }
  if (meta.errors.length) {
    return 'error'
  }

  return undefined
}
